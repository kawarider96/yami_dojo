export function BasicButton({text, type, action}) {
    return (
        <button 
        onClick={action}
        type={type ? type : 'button'} 
        className='
        samurai-button
        w-1/12
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
        duration-150'>
            {text}
        </button>
    )
}