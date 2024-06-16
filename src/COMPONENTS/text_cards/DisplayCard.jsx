export function DisplayCard({jpTitle, jpText, huText}) {
    return (
        <div className="w-max p-5 shadow-2xl rounded-xl bg-samurai-gradient">
            <h1 className="text-4xl font-bold text-wrap w-2/4">{jpTitle}</h1>
            <p className="text-dark-secondary">{jpText}</p>

            <p className="text-dark-primary">{huText}</p>
        </div>
    )
}