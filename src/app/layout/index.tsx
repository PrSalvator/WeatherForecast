import { Header } from "@/widgets/header"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div>
            <Header/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}