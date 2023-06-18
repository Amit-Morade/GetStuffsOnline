import { createClient } from "@supabase/supabase-js"

export const supabase = createClient('https://znrnkstddrpozmvgkggb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpucm5rc3RkZHJwb3ptdmdrZ2diIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY4MTI2NTksImV4cCI6MjAwMjM4ODY1OX0.m-6G7TuD_j47iesYTMG4Usm3_vqjckKqtQ2kn6y5me4')

export async function loginUser() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:3000/productlist'
        }
    })
}

export async function logoutUser() {
    const { error } = await supabase.auth.signOut()
}