import {
    createContext,
    useEffect,
    useState,
    useContext,
    ReactNode,
} from "react";
import { supabase } from "../client/supabase-client";
import { Session } from "@supabase/supabase-js";
import { Store, getStore } from "@tauri-apps/plugin-store";

// Tipo del contexto
type AuthContextType = {
    session: Session | null;
    signUpNewUser: (
        name: string,
        lastname: string,
        email: string,
        password: string
    ) => Promise<{ success: boolean; data?: any; error?: any }>;
    logInUser: (args: {
        email: string;
        password: string;
    }) => Promise<{ success: boolean; data?: any; error?: any }>;
    signOut: () => Promise<void>;
};

// Props del proveedor
type AuthProviderProps = {
    children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
    const [session, setSession] = useState<Session | null>(null);

    const getOrLoadStore = async () => {
        let store = await getStore(".auth.json");
        if (!store) store = await Store.load(".auth.json");
        return store;
    };

    const saveSessionToStore = async (session: Session) => {
        const store = await getOrLoadStore();
        await store.set("session", JSON.stringify(session));
        await store.save();
    };

    const loadSessionFromStore = async () => {
        const store = await getOrLoadStore();
        const raw = await store.get<string>("session");
        if (raw) setSession(JSON.parse(raw) as Session);
    };

    const removeSessionFromStore = async () => {
        const store = await getOrLoadStore();
        await store.delete("session");
        await store.save();
    };

    useEffect(() => {
        const bootstrap = async () => {
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                setSession(data.session);
                await saveSessionToStore(data.session);
            } else {
                await loadSessionFromStore();
            }
        };
        bootstrap();

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                if (session) {
                    setSession(session);
                    saveSessionToStore(session);
                } else {
                    setSession(null);
                    removeSessionFromStore();
                }
            }
        );
        return () => listener?.subscription.unsubscribe();
    }, []);

    const signUpNewUser = async (
        name: string,
        lastname: string,
        email: string,
        password: string
    ) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { name, lastname },
            },
        });

        if (error) {
            console.log("There was a problem signing up", error);
            return { success: false, error };
        }

        if (data.session) await saveSessionToStore(data.session);

        return { success: true, data };
    };

    const logInUser = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) {
                console.log("An error occurred during login: ", error);
                return { success: false, error };
            }

            if (data.session) await saveSessionToStore(data.session);

            return { success: true, data };
        } catch (error) {
            console.error("Unexpected error: ", error);
            return { success: false, error };
        }
    };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log("There was an error signing out", error);
        }
        await removeSessionFromStore();
        setSession(null);
    };

    return (
        <AuthContext.Provider
            value={{ session, signUpNewUser, logInUser, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useUserAuth = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error(
            "useUserAuth must be used within an AuthContextProvider"
        );
    return context;
};
