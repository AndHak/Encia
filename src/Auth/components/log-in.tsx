import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react/dist/iconify.js";
import WindowControls from "@/components/system/navbar/windows-controls";
import { useState } from "react";
import { useUserAuth } from "../context/AuthContext";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, seterror] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { logInUser } = useUserAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        seterror("");

        const result = await logInUser({ email, password });

        if (result.success) {
            navigate("/dashboard");
        } else {
            seterror(result.error?.message);
        }

        setLoading(false);
    };

    return (
        <main className="flex flex-col h-screen">
            <div className="h-10 w-full top-0 shrink-0 items-end justify-items-end mb-10 draggable">
                    <WindowControls />
                  </div>

            <div className="flex-1 bg-background flex items-center justify-center px-4">
                <div className="w-full max-w-sm flex flex-col items-center justify-center space-y-6">
                    {/* Logo */}
                    <div className="flex items-center justify-center mb-8">
                        <img src="/diente.png" alt="" />
                    </div>

                    {/* Welcome text */}
                    <div className="text-center mb-12">
                        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                            ¡Hola, bienvenido de vuelta! v0.2.1
                        </h1>
                        <p className="text-gray-600">
                            ¿Primera vez aquí?{" "}
                            <Link
                                to="/signup"
                                className="text-blue-600 hover:underline"
                            >
                                Regístrate gratis
                            </Link>
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        className="w-full max-w-sm space-y-6"
                        onSubmit={handleLogin}
                    >
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="email" className="sr-only">
                                    Tu email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Tu email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-12 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <Label htmlFor="password" className="sr-only">
                                    Contraseña
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="h-12 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {error && (
                            <p className="text-sm text-red-500 text-center">
                                {error}
                            </p>
                        )}

                        <Button
                            className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white"
                            disabled={loading}
                            type="submit"
                        >
                            Iniciar sesión
                        </Button>


                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-gray-500">
                                    otras formas de iniciar sesion
                                </span>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            className="w-full h-12 border-gray-200 text-gray-700 hover:bg-gray-50 bg-transparent"
                            type="submit"
                        >
                            <Icon
                                icon="flat-color-icons:google"
                                width="48"
                                height="48"
                            />
                            Inicio de sesión con Google
                        </Button>
                    </form>

                    {/* Footer */}
                    <div className="mt-12 text-center text-xs text-gray-500">
                        <p>
                            Reconoces que has leído y aceptas nuestros{" "}
                            <Link
                                to="/terms"
                                className="underline hover:text-gray-700"
                            >
                                Términos de Servicio
                            </Link>{" "}
                            y nuestra{" "}
                            <Link
                                to="/privacy"
                                className="underline hover:text-gray-700"
                            >
                                Política de Privacidad
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
