import { Navbar } from "../navbars/Navbar";

export function MainLayout({children}) {
    return (
        <div className="min-h-screen flex flex-col text-dark-primary" style={{background:'linear-gradient(to right, #000000, #434343)'}}>
            <Navbar/>
            {children}
        </div>
    )
}