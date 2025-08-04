import { Route, Routes } from "react-router-dom"
import RootPage from "../pages/RootPage"
import ProtectedRoute from "./ProtectedRoute.route"
import LoginPage from "@/Auth/components/log-in"
import SignupPage from "@/Auth/components/sign-up"

function MyRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <RootPage />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<LoginPage />} /> 
    </Routes>
  )
}

export default MyRoutes
