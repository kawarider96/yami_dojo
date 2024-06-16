import { useState } from "react";
import { BasicButton } from "../buttons/BasicButton";
import { CloseButton } from "../buttons/CloseButton";

export function WordCard({title, description, image, words, modalTitle}) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    
    return (
        <div className="h-fit w-1/4 flex flex-col bg-samurai-gradient shadow-xl rounded-xl dark:bg-neutral-900 dark:shadow-neutral-700/70">
            <img className="w-full h-96 rounded-t-xl object-cover" src={image} alt="Image Description"/>
            <div className="p-5">
                <h3 className="text-lg font-bold text-gray-100 dark:text-white">
                    {title}
                </h3>
                <p className="h-48 mt-1 text-gray-300 dark:text-neutral-400 overflow-auto">
                    {description}
                </p>
                <div className="mt-5 w-full">
                    <BasicButton action={openModal}>Show</BasicButton>
                </div>

                {/*<!-- overlay -->*/}
                <div id="modal_overlay" className={`w-full p-10 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

                {/*<!-- modal -->*/}
                <div id="modal" className={`w-full bg-samurai-gradient p-8 rounded-lg transform transition-transform duration-300 ${isModalOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-full scale-150'}`}>

                    {/*<!-- button close -->*/}
                    <CloseButton className={'absolute right-20'} size={'size-10'} onClick={closeModal}/>

                    {/*<!-- header -->*/}
                    <div className="px-4 py-3">
                    <h2 className="text-4xl font-bold tracking-widest text-gray-100">{modalTitle}</h2>
                    </div>

                    {/*<!-- body -->*/}
                    <div className="w-full p-3">
                        <div className="w-full shadow-xl grid gap-5 max-h-96 overflow-auto">
                        {words.map(word => (
                            <div key={word.id} className="flex items-center gap-5">
                                <p className="text-2xl font-bold">{word.id}.</p>
                                <p className="text-2xl font-bold">{word.hiragana} ({word.romaji}) - {word.meaning}</p>
                            </div>
                        ))}

                        </div>
                    </div>

                    {/*<!-- footer -->*/}
                    <div className="mt-5 w-full flex justify-end items-center gap-3">
                        <BasicButton action={closeModal}>Close</BasicButton>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}