import { Navigate } from "react-router-dom"
import { useUserAuth } from "@/Auth/context/AuthContext"

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { session } = useUserAuth()

  if (!session) {
    return <Navigate to="/signin" replace />
  }

  return children
}

export default ProtectedRoute
