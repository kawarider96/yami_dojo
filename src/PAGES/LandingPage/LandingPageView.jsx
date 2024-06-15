import { DisplayCard } from "../../COMPONENTS/text_cards/DisplayCard";


export function LandingPageView() {
    return (
        <div className="relative flex-1 overflow-auto p-5" style={{backgroundImage:'url(images/bg-wide.png)', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
            <DisplayCard 
                jpTitle={'生徒さん、ようこそ！私たちと一緒にいて、簡単に日本語を学びましょう。'}
                jpText={'(Seito-san, youkoso! Watashitachi to issho ni ite, kantan ni nihongo o manabimashou.)'}
                huText={'Azaz: Üdvözöllek tanítvány, tarts velünk és tanulj japánul könnyedén!'}
            />

            <div className="absolute right-44 top-1/4">
                <div className="flex items-center">
                    <div>
                        <h2 className="font-bold text-9xl text-shadow-xl">つ</h2>
                        <h2 className="font-bold text-9xl text-shadow-xl">く</h2>
                        <h2 className="font-bold text-9xl text-shadow-xl">り</h2>
                        <h2 className="font-bold text-9xl text-shadow-xl">て</h2>
                    </div>
                </div>
                <div>
                    <p className="tracking-widest text-2xl text-shadow-xl">Királyfalvi Krisztián</p>
                    <p className="text-center"> 06 70 36 77 966</p>
                    <p className="text-center"> fejlesztő</p>
                </div>
            </div>

        </div>
    )
}   