/* eslint-disable react-hooks/exhaustive-deps */
import { colors, routes } from "src/utils/constants"
import RoutesHandler from "src/utils/routesHandler"
import { Outlet } from "react-router-dom"
import CircularDropdown from "src/components/DropDown"
import { Icons } from "src/utils/Icons"
import { useCustomModal } from "src/context/CustomModalContext"
import LogoutModal from "src/components/modals/Logout"
import { DropdownItem, Tab } from "src/types/Types"
import Navbar from "src/components/Navbar"
import { FaHandHoldingHeart } from "react-icons/fa"

export default function ExchangerLayout() {

  const { setRoute } = RoutesHandler()
  const { showModal } = useCustomModal()

  const startTabs: Tab[] = [
    {
      icon: Icons.home(colors.white),
      onClick: () => setRoute(routes.main),
      active: false
    },
    {
      text:"Quienes Somos",
      onClick: () => setRoute(routes.exchanger.information),
      active: false
    },
    {
      icon: <FaHandHoldingHeart />,
      text: 'Donar',
      onClick: () => setRoute(routes.exchanger.donations)
    }
  ]

  const dropdownItems: DropdownItem[] = [
    {
      text: 'Perfil',
      onClick: () => setRoute(routes.exchanger.profile)
    },
    {
      text: 'Inventario',
      onClick: () => setRoute(routes.exchanger.inventory)
    },
    {
      text: 'Solicitudes enviadas',
      onClick: () => setRoute(routes.exchanger.requestsSent)
    },
    {
      text: 'Cerrar sesion',
      onClick: () => showModal(<LogoutModal/>)
    }
  ]

  const endTabs: Tab[] = [
    {
      icon: Icons.username(colors.white),
      customElement: <CircularDropdown icon={Icons.username()} items={dropdownItems}/>
    },
    /*{
      
      customElement: <BellNotificationList />
    }*/
  ]

  return (
    <>
      <Navbar startTabs={startTabs} endTabs={endTabs} />
      <Outlet/>
    </>
  )
}