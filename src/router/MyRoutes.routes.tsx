import { Route, Routes } from "react-router-dom"
import RootPage from "../pages/RootPage"

function MyRoutes() {
  return (
    <Routes>
        <Route path="/" element={<RootPage/>} />
    </Routes>
  )
}

export default MyRoutes