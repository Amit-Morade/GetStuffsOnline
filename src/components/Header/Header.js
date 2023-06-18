import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import LogoutButton from "../LogoutButton/LogoutButton";
import "./Header.css"

export default function Header(){
    const { session } = useContext(UserContext);

    return (
        <nav className="navbar">
            <h3>GetStuffsOnline</h3>
            {session && <LogoutButton />}
        </nav>
    )
}