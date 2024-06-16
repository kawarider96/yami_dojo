export function BasicButton({ type = 'button', action, children }) {
    return (
        <button 
            onClick={action}
            type={type}
            className="
                samurai-button
                w-full
                justify-center
                inline-flex 
                items-center 
                px-4 
                py-2 
                bg-dark-btn-bg 
                border 
                border-transparent 
                rounded-md 
                font-semibold 
                text-xs 
                text-dark-btn-text 
                uppercase 
                tracking-widest 
                transition ease-in-out 
                duration-150
            ">
            {children}
        </button>
    );
}