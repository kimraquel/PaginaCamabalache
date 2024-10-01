/* eslint-disable react-hooks/exhaustive-deps */

import { User } from "./User"
import { roles } from "./constants"
import { AdminRouter } from "../routes/admin/routes"
import { HelperRouter } from "../routes/helper/routes"
import { ExchangerRouter } from "src/routes/exchanger/routes"
import ErrorPage from "src/routes/error/ErrorPage"

export default function RoleBasedRouting() {
  const { setPageTitle, getRole, setUser, logout } = User()

  let role = getRole()

  // Usuario quemado predeterminado
  const usuarioQuemado = {
    token: "1234567890abcdef",  // Token predeterminado
    role: roles.EXCHANGER,      // Rol predeterminado (puedes cambiarlo si es necesario)
    id: "1"                     // ID predeterminado
  }

  // Si el rol no está definido, asignar el usuario quemado
  if (!role) {
    setUser(usuarioQuemado)
    role = usuarioQuemado.role  // Actualizar el rol después de quemar el usuario
  }

  // Establecer el título de la página
  setPageTitle()
  
  // Ruta basada en el rol
  switch (role) {
    case roles.ADMIN:
      return <AdminRouter/>
    case roles.HELPER:
      return <HelperRouter/>
    case roles.EXCHANGER:
      return <ExchangerRouter/>
    default:
      logout()
      return <ErrorPage/>
  }
}
