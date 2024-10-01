import { useLocation, useNavigate } from "react-router-dom"
import { getItem } from "./localStorage" // Asumimos que tienes las funciones de localStorage

export default function RoutesHandler() {
    
    const location = useLocation()
    const navigator = useNavigate()

    const getRoute = () => location.pathname

    // Modificación para usuario quemado, estableciendo una ruta predeterminada
    const setRoute = (route: string) => {
        const defaultId = getItem("id") || "1"; // Si no hay id, usar el id quemado ("1")
        const fullRoute = route.includes(':id') ? route.replace(':id', defaultId) : route;
        navigator(fullRoute);
    }

    // Obtención del ID de la URL
    const getId = () => {
        const split = location.pathname.split('/')
        const id = split[split.length - 1]
        return !isNaN(parseInt(id)) ? id : getItem("id") || "1"; // Devuelve id de la URL o el quemado
    }

    return { getRoute, setRoute, location, getId }
}
