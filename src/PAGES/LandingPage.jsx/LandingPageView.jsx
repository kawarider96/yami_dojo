import { DisplayCard } from "../../COMPONENTS/text_cards/DisplayCard";


export function LandingPageView() {
    return (
        <div className="flex-1 overflow-auto p-5" style={{backgroundImage:'url(images/bg-wide.png)', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
            <DisplayCard 
                jpTitle={'生徒さん、ようこそ！私たちと一緒にいて、簡単に日本語を学びましょう。'}
                jpText={'(Seito-san, youkoso! Watashitachi to issho ni ite, kantan ni nihongo o manabimashou.)'}
                huText={'Azaz: Üdvözöllek tanítvány, tarts velünk és tanulj japánul könnyedén!'}
            />

            
        </div>
    )
}   