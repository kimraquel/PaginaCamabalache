import { Tab } from "src/types/Types"
import Button from "./Button"
import { NavbarProps } from "src/types/PropsTypes"

export default function Navbar({startTabs: start, middleTabs: middle, endTabs: end}: NavbarProps) {

    const getTabObjs = (tabs:Array<Tab>, key:string) => {
        return tabs && tabs.map((tab, index) => (
            <div key={`${key}_${index}`}>
                {tab.customElement ? tab.customElement :
                    <Button visible={tab.visible} active={tab.active} onClick={tab.onClick} key={`${key}_${index}`}>
                        {tab.icon}
                        {tab.text}
                    </Button>
                }
            </div>
        ))
    }

    return (
        <div className="px-5 fixed top-0 left-0 w-full text-white z-10">
            <div className="navbar bg-navbar-blue mt-2 shadow-xl rounded-box flex flex-wrap items-center justify-between">
                <div className="flex gap-2">
                    {getTabObjs(start, 'start')}
                </div>
                <div className="flex justify-center">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {getTabObjs(middle, 'middle')}
                    </ul>
                </div>
                <div className="flex gap-2">
                    {getTabObjs(end, 'end')}
                </div>
            </div>
        </div>
    );
}