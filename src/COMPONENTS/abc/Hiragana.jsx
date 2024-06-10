import { Button } from "@material-tailwind/react"
import { hiraganaAlphabet } from "../../SUPPORT/DATA/abc-data"

export function Hiragana()  {
    return (
        <div className="p-5">
            <div className="text-center p-5 font-bold tracking-widest">
                <h1>HIRAGANA</h1>
            </div>

            <div className="grid grid-cols-5 justify-items-center gap-5">
                {hiraganaAlphabet.map((item, index) => (
                    <div key={index} className={`grid w-full p-5 rounded-xl text-center hover:scale-110 transition cursor-pointer ${item.hiragana ? 'bg-dark-card-bg shadow-xl' : ''}`}>
                        <h1 className="font-bold text-6xl">{item.hiragana}</h1>
                        <p className="text-3xl">{item.romanji}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}