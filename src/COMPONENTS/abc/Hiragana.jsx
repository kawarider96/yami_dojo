import { Button } from "@material-tailwind/react"
import { hiraganaAlphabet } from "../../SUPPORT/DATA/abc-data"

export function Hiragana()  {
    return (
        <div className="p-5">
            <div className="text-center p-5 font-bold tracking-widest">
                <h1>HIRAGANA</h1>
                <div className="flex items-center">
                    <div>
                        <div className="flex items-center gap-5 p-5 font-bold tracking-widest">
                            <div className="bg-blue-600 h-12 w-12 rounded-xl shadow-xl"></div>
                            <h1>DAKUTEN</h1>
                        </div>
                        <div className="flex items-center gap-5 p-5 font-bold tracking-widest">
                            <div className="bg-red-600 h-12 w-12 rounded-xl shadow-xl"></div>
                            <h1>HANDAKUTEN</h1>
                        </div>
                    </div>
                    <div className="flex items-center text-justify p-10">
                        <p>
                        A hiragana a japán írásrendszer egyik alapvető eleme, amelyet főként japán 
                        szavak és nyelvtani elemek írására használnak. A hiragana írásjegyek az 
                        egyszerűbb és lekerekítettebb formájukról ismertek, és mindegyik egy-egy 
                        szótagot jelöl. A hiragana ABC összesen 46 alapvető karakterből áll, amelyeket a 
                        japán ábécé összes szótagjának leírására használnak.<br/><br/>
                        DAKUTEN<br/>
                        A dakuten, más néven "zöngésítő jel", egy kis két vonal, amelyet a hiragana karakter jobb 
                        felső sarkába helyeznek. A dakuten zöngét ad a mássalhangzóknak<br/><br/>
                        HANDAKUTEN<br/>
                        A handakuten, más néven "pöttyös jel", egy kis kör, amely szintén a hiragana karakter jobb 
                        felső sarkába kerül. A handakuten a h-sorozatú mássalhangzókat p-sorozatúvá alakítja.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-5 justify-items-center gap-5">
                {hiraganaAlphabet.map((item, index) => (
                    <div key={index} className={`grid grid-cols-2 w-full p-5 rounded-xl text-center hover:scale-110 transition cursor-pointer ${item.hiragana ? 'bg-dark-card-bg shadow-xl' : ''}`}>
                        <div>
                            <h1 className="font-bold text-6xl">{item.hiragana}</h1>
                            <p className="text-3xl">{item.romanji}</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-6xl text-blue-600">{item.dakuten}</h1>
                            <p className="text-3xl text-blue-600">{item.dakuten_romanji}</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-6xl text-red-600">{item.handakuten}</h1>
                            <p className="text-3xl text-red-600">{item.handakuten_romanji}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}