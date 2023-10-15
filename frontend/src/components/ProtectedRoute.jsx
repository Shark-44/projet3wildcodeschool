import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute({ user, redirectPath = "/", children }) {
  if (!user) return <Navigate to={redirectPath} replace />

  return children || <Outlet />
}

export default ProtectedRoute
