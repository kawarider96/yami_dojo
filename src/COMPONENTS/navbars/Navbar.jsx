import { BasicButton } from "../buttons/BasicButton";
import { useNavigate } from "react-router-dom";

export function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="h-20 flex items-center p-4 gap-3">
            
            <BasicButton action={() => navigate('/')}>Főoldal</BasicButton>

            <BasicButton action={() => navigate('/abc')}>ABC</BasicButton>
   
            <BasicButton action={() => navigate('/words')}>szótár</BasicButton>

            <BasicButton action={() => navigate('/training')}>Gyakorló teszt</BasicButton>
        </div>
    )
}