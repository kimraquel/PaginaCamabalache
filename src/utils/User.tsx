import { endPoints, roles, routes } from "./constants"
import { getItem, removeItem, setID, setItem } from "./localStorage"
import { getData } from "./request/httpRequests"
import RoutesHandler from "./routesHandler"
export const User = () => {

    const TOKEN: string = 'token'
    const ROLE: string = 'role'
    const ID: string = 'id'
    const CUSTOM_NAME: string = 'windowName'

    const { setRoute } = RoutesHandler()

    const setPageTitle = () => {
        const route = getRole() == roles.EXCHANGER ? endPoints.profile : endPoints.profileHelper
        const custom_name = getItem(CUSTOM_NAME)

        if (custom_name) {
            document.title = custom_name
        } else {
            getData(route)
            .then((data) => document.title = `${data.name} - ${getRole()}`)
            .catch(() => document.title = getRole())
        }
    }
    
    type UserData = {
        token: string,
        role: string,
        id: string
    }

    // Usuario quemado
    const usuarioQuemado: UserData = {
        token: "1234567890abcdef",  // Puedes reemplazar con un token real o ficticio
        role: roles.EXCHANGER,      // Puedes usar el rol que quieras, como 'EXCHANGER' o 'HELPER'
        id: "1"                     // Un ID ficticio para identificar al usuario
    }

    // Modificar setUser para usar el usuario quemado
    const setUser = (data: UserData = usuarioQuemado) => {
        setID()
        setItem(TOKEN, data.token)
        setItem(ROLE, data.role)
        setItem(ID, data.id)
    }

    const getToken = () => {
        return getItem(TOKEN)
    }

    const getRole = () => {
        return getItem(ROLE)
    }
    const getId = () => {
        return getItem(ID)
    }

    const logout = () => {
        removeItem(TOKEN)
        removeItem(ROLE)
        removeItem(ID)
        setRoute(routes.login)
    }

    // Al iniciar, establecer el usuario quemado automáticamente
    setUser(usuarioQuemado)

    return { setPageTitle, setUser, getToken, getRole, getId, logout }
}
