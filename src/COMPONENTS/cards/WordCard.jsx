import { useState } from "react";
import { BasicButton } from "../buttons/BasicButton";
import { CloseButton } from "../buttons/CloseButton";
import { Box, AspectRatio, Typography, Card, Button, Modal, ModalDialog, ModalClose } from "@mui/joy";
import { basicTheme } from "../../SUPPORT/THEME/theme";

export function WordCard({title, description, image, words, modalTitle}) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    
    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <AspectRatio ratio="6/4">
                <div>
                    <img src={image}/>
                </div>
            </AspectRatio>
            <div>
                <Typography level="h2" sx={{textAlign:'center'}}>{title}</Typography>
                <Typography level="body-sm">{description}</Typography>
                <Button fullWidth sx={{marginTop:'10px'}} onClick={openModal}>Tovább</Button>
                <Modal
                    open={isModalOpen}
                    onClose={closeModal}
                >
                    <ModalDialog
                        sx={{width:'80%', height:'50%', background:basicTheme.colorSchemes.light.palette.background['gradient-black']}}
                        variant="outlined"
                    >
                        <ModalClose/>
                        <Box sx={{height:'100%', overflow:'auto', display:'grid', gap:'20px'}}>
                            {words.map(word => (
                                <Box key={word.id} sx={{display:['grid', 'flex'], textAlign:['center'], border:'1px solid white', gap:'10px', padding:'20px 0px 20px 20px', alignItems:'center', boxShadow:'md', borderRadius:'10px'}}>
                                    <Typography level="body-lg">{word.id}.</Typography>
                                    <Box sx={{display:'grid', width:'100%', justifyContent:'center'}}>
                                        <Typography level="h2" color="primary">{word.hiragana}</Typography>
                                        <Typography level="body-lg"> ({word.romaji})</Typography>
                                        <Typography level="body-lg">{word.meaning}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </ModalDialog>
                </Modal>
            </div>
        </Card>
        
    )
}

/*
<Grid container>
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

                <div id="modal_overlay" className={`w-full p-10 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

                
                <div id="modal" className={`w-full bg-samurai-gradient p-8 rounded-lg transform transition-transform duration-300 ${isModalOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-full scale-150'}`}>


                    <CloseButton className={'absolute right-20'} size={'size-10'} onClick={closeModal}/>

                  
                    <div className="px-4 py-3">
                    <h2 className="text-4xl font-bold tracking-widest text-gray-100">{modalTitle}</h2>
                    </div>

        
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

                  
                    <div className="mt-5 w-full flex justify-end items-center gap-3">
                        <BasicButton action={closeModal}>Close</BasicButton>
                    </div>
                </div>

                </div>
            </div>
        </Grid>
*/