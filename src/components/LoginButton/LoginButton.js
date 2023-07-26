import { useState, useEffect, useContext } from "react"
import { createClient } from "@supabase/supabase-js"
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from "react-router-dom"
import { loginUser, supabase } from "../../utils/supabase"
import { UserContext } from "../../contexts/UserContext"
import GoogleLogo from "../../images/icons8-google-logo.svg"

import "./LoginButton.css"


export default function LoginButton({buttonType}) {
    const navigate = useNavigate();
    const session = useContext(UserContext)
    
    return <div className="google-login-button" onClick={async () => {
        loginUser(); 
     }}
     title="click to log in to google" 
    >
        <div className="google-logo-container">
            <img src={GoogleLogo} />
        </div>
        
        <button>Sign in with Google</button>
        
    </div>
    
}