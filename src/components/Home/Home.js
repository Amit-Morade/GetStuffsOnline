import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";

export default function Home() {
    const navigate = useNavigate();
    const { session } = useContext(UserContext);
    if(session) {
        navigate("/productlist")
    }
    console.log(session)

    return <>
        { !session && <LoginButton />}
    </>
}