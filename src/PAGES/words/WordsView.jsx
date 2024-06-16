import { BasicCard } from "../../COMPONENTS/cards/BasicCard";

export function WordsView() {
    const variants = [
        {theme: 'helységek a lakásban', description: 'Általános, mindennapi helységek a lakásokban, mint például konyha, fűrdőszoba.', count: 5, words: {
            konyha: {hiragana: 'だいどころ', romanji:'daidakoro'},
            fűrdőszoba: {hiragana: 'よくしつ', romanji: 'yokushitsu'} 
        }}
    ];
    return (
        <div className="p-5">
            <div>
                <h1 className="text-center font-bold text-4xl tracking-widest">VÁLASSZ TÉMAKÖRT</h1>
            </div>

            <div>
                {variants.map((variant, index) => (
                    <BasicCard key={index} data={variant}/>
                ))}
            </div>
        </div>
    )
}