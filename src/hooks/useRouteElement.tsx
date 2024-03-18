import path from 'src/constants/path'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from 'src/layout/MainLayout'
import Profile from 'src/pages/Profile'
import RegisterLayout from 'src/layout/RegisterLayout'
import Login from 'src/pages/Login'
import Register from 'src/pages/Register'

const ProtectedRoute = () => {
  const isAuthenticated = true
  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}
const RejectedRoute = () => {
  const isAuthenticated = false
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.home} />
}

const useRouteElement = () => {
  const routeElement = useRoutes([
    {
      index: true,
      path: path.home,
      element: (
        <MainLayout>
          <></>
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.profile,
          element: <Profile />
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: path.register,
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])
  return routeElement
}

export default useRouteElement
