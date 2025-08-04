

import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";
import WindowControls from "@/components/system/navbar/windows-controls";
import { useUserAuth } from "../context/AuthContext";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { signUpNewUser } = useUserAuth();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signUpNewUser(name, lastname, email, password);
      if (result.success) {
        navigate("/login");
      } else {
        setError(result.error?.message || "Error al registrarse");
      }
    } catch (err) {
      setError("Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col h-screen">
      <div className="h-10 w-full top-0 shrink-0 items-end justify-items-end mb-10">
        <WindowControls />
      </div>

      <div className="flex-1 bg-background flex items-center justify-center px-4">
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
          <div className="flex items-center justify-center mb-8">
            <img src="/diente.png" alt="" />
          </div>

          <div className="text-center mb-12">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              ¡Únete a nosotros!
            </h1>
            <p className="text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/signin" className="text-blue-600 hover:underline">
                Inicia sesión
              </Link>
            </p>
          </div>

          <form onSubmit={handleSignUp} className="w-full max-w-sm space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="sr-only">
                    Nombre
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="sr-only">
                    Apellido
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Apellido"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="h-12 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="sr-only">
                  Tu email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-12 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <Button
              className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white"
              disabled={loading}
              type="submit"
            >
              {loading ? "Creando cuenta..." : "Crear cuenta"}
            </Button>

            <div className="text-center">
              <Button
                variant="link"
                className="text-gray-600 hover:text-gray-900"
                type="button"
              >
                Registrarse con enlace mágico
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">o</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full h-12 border-gray-200 text-gray-700 hover:bg-gray-50 bg-transparent"
              disabled={loading}
              type="button"
            >
              <Icon
                icon="flat-color-icons:google"
                width="20"
                height="20"
                className="mr-2"
              />
              Registrarse con Google
            </Button>
            {error && <p className="text-red-600 text-center pt-4">{error}</p>}
          </form>

          <div className="mt-12 text-center text-xs text-gray-500">
            <p>
              Al registrarte, aceptas nuestros{" "}
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
