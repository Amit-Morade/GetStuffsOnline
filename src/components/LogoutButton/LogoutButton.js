import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../utils/supabase"

export default function LogoutButton() {
    const navigate = useNavigate();

    return <>
        <Button variant="contained" onClick={async () => {
            logoutUser();
            navigate("/");
        }}>
            LogOut
        </Button>
    </>
}