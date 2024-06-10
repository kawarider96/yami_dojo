export function DisplayCard({jpTitle, jpText, huText}) {
    return (
        <div className="w-max p-5 shadow-2xl rounded-xl" style={{background: 'linear-gradient(90deg, rgba(134,0,0,0.5   ) 0%, rgba(51,29,29,0.9360994397759104) 49%, rgba(252,252,252,0) 100%)'}}>
            <h1 className="text-4xl font-bold text-wrap w-2/4">{jpTitle}</h1>
            <p className="text-dark-secondary">{jpText}</p>

            <p className="text-dark-primary">{huText}</p>
        </div>
    )
}