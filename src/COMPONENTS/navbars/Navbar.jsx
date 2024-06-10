import { BasicButton } from "../buttons/BasicButton";
import { useNavigate } from "react-router-dom";

export function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="h-20 flex items-center p-4 gap-3">
            
            <BasicButton text={'Főoldal'} action={() => navigate('/')}/>

            <BasicButton text={'abc'} action={() => navigate('/abc')}/>
   
            <BasicButton text={'szótár'}/>
        </div>
    )
}