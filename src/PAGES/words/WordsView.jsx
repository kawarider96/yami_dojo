import { WordCard } from "../../COMPONENTS/cards/WordCard";

export function WordsView() {
    const familyWords = [
        { id: 1, hiragana: 'ちち', romaji: 'chichi', meaning: 'apa' },
        { id: 2, hiragana: 'はは', romaji: 'haha', meaning: 'anya' },
        { id: 3, hiragana: 'そふ', romaji: 'sofu', meaning: 'nagyapa' },
        { id: 4, hiragana: 'そぼ', romaji: 'sobo', meaning: 'nagyanya' },
        { id: 5, hiragana: 'おとうさん', romaji: 'otousan', meaning: 'apa (tiszteletbeli forma)' },
        { id: 6, hiragana: 'おかあさん', romaji: 'okaasan', meaning: 'anya (tiszteletbeli forma)' },
        { id: 7, hiragana: 'あに', romaji: 'ani', meaning: 'báty' },
        { id: 8, hiragana: 'あね', romaji: 'ane', meaning: 'nővér' },
        { id: 9, hiragana: 'おとうと', romaji: 'otouto', meaning: 'öcs' },
        { id: 10, hiragana: 'いもうと', romaji: 'imouto', meaning: 'húg' },
        { id: 11, hiragana: 'かぞく', romaji: 'kazoku', meaning: 'család' },
        { id: 12, hiragana: 'きょうだい', romaji: 'kyoudai', meaning: 'testvérek' },
        { id: 13, hiragana: 'ふうふ', romaji: 'fuufu', meaning: 'házaspár' },
        { id: 14, hiragana: 'こども', romaji: 'kodomo', meaning: 'gyerek' },
    ];

    const homeRelatedWords = [
        { id: 1, hiragana: 'いえ', romaji: 'ie', meaning: 'otthon, ház' },
        { id: 2, hiragana: 'へや', romaji: 'heya', meaning: 'szoba' },
        { id: 3, hiragana: 'げんかん', romaji: 'genkan', meaning: 'bejárat' },
        { id: 4, hiragana: 'ふろば', romaji: 'furoba', meaning: 'fürdőszoba' },
        { id: 5, hiragana: 'だいどころ', romaji: 'daidokoro', meaning: 'konyha' },
        { id: 6, hiragana: 'いま', romaji: 'ima', meaning: 'nappali' },
        { id: 7, hiragana: 'しんしつ', romaji: 'shinshitsu', meaning: 'hálószoba' },
        { id: 8, hiragana: 'にわ', romaji: 'niwa', meaning: 'kert' },
        { id: 9, hiragana: 'おしいれ', romaji: 'oshiire', meaning: 'beépített szekrény' },
        { id: 10, hiragana: 'たたみ', romaji: 'tatami', meaning: 'tatami szőnyeg' },
        { id: 11, hiragana: 'だんろ', romaji: 'danro', meaning: 'kandalló' },
        { id: 12, hiragana: 'かぐ', romaji: 'kagu', meaning: 'bútor' },
        { id: 13, hiragana: 'てんじょう', romaji: 'tenjou', meaning: 'mennyezet' },
        { id: 14, hiragana: 'かいだん', romaji: 'kaidan', meaning: 'lépcső' },
        { id: 15, hiragana: 'まど', romaji: 'mado', meaning: 'ablak' },
        { id: 16, hiragana: 'どあ', romaji: 'doa', meaning: 'ajtó' },
        { id: 17, hiragana: 'しょっきだな', romaji: 'shokkidana', meaning: 'konyhaszekrény' },
        { id: 18, hiragana: 'でんき', romaji: 'denki', meaning: 'villany, elektromosság' },
        { id: 19, hiragana: 'せんめんじょ', romaji: 'senmenjo', meaning: 'mosdó' },
        { id: 20, hiragana: 'かびん', romaji: 'kabin', meaning: 'váza' },
    ];

    return (
        <div className="h-full p-5">
            <div className="h-1/2 flex flex-wrap gap-5">
                <WordCard 
                title={'család (家族 - kazoku)'} 
                description={`A japán kultúrában a család (家族, kazoku) központi szerepet játszik, és mélyen gyökerezik a társadalmi struktúrában és mindennapi életben. A hagyományos japán családmodell, az úgynevezett "ie" rendszer, generációkon keresztül egy nagyobb családi házban élt együtt, ahol az idősebb családtagok nagy tiszteletnek örvendtek. Ebben a rendszerben az apa volt a család feje, aki felelős volt a család gazdasági jólétéért és döntéshozataláért, míg az anya általában a háztartás vezetésével és a gyermekek nevelésével foglalkozott.
                A japán családokban nagy hangsúlyt fektetnek az összetartásra, a kötelezettségekre és a tiszteletre. Az idősebbek iránti tisztelet (敬老, keirō) különösen fontos, amit az is tükröz, hogy sok japán családban a fiatalabb generációk gondoskodnak az idősebb családtagokról.
                Azonban a modern japán társadalom változásai, mint például a városi élet, a karrierorientált életmód és a kisebb lakások, hatással vannak a hagyományos családi struktúrára. Egyre több fiatal pár él külön a szülőktől, és a gyermekek száma is csökken. Ennek ellenére a család továbbra is a japán élet egyik legfontosabb alapköve, ahol a hagyományok és a modern életmód egyensúlyban próbálnak maradni.
                A japán kultúrában a családi ünnepek, mint például az Újév (お正月, Oshōgatsu) és a Kecske Nap (こどもの日, Kodomo no Hi) különleges alkalmak, amikor a családok összegyűlnek, és közösen ünneplik a hagyományokat és az egymás iránti szeretetet.`}
                image={"images/samurai-family.png"}
                words={familyWords}
                modalTitle={'család (家族, kazoku)'}
                />

                <WordCard 
                title={'いえ (ie - otthon)'} 
                description={`Családi Összetartás:
                Az "ie" nem csupán egy épület, hanem a család központja, ahol a generációk együtt élnek, és ahol a családi hagyományok és értékek továbbadódnak. Az idősebb családtagokkal való együttélés hagyománya mélyen gyökerezik a japán kultúrában.

                Hagyományok és Rituálék:
                A japán otthon számos hagyományos rituálé színhelye, mint például a teaceremónia (茶道, sadō), a shinto szertartások és az éves ünnepek (például az Újév, お正月, Oshōgatsu). Az otthonban tartott rituálék és ünnepek összekapcsolják a családot és megerősítik a közösségi kötelékeket.

                Építészeti Sajátosságok:
                A hagyományos japán otthonok (和風, wafū) jellegzetes építészeti elemei, mint például a tatami szőnyegek, tolóajtók (障子, shōji), és a verandák (縁側, engawa) mind hozzájárulnak a nyugalom és harmónia érzéséhez. Ezek az elemek a természetközeliséget és az egyszerűséget tükrözik.

                Kertkultúra:
                Az otthonhoz tartozó kertek (庭, niwa) szintén fontosak, mivel a japán kultúrában a természettel való harmonikus kapcsolat nagy jelentőséggel bír. A kertek kialakítása gyakran a nyugalom és a meditáció helyévé teszi az otthont.

                Modern Változások:
                A modern japán társadalomban az urbanizáció és a nyugati hatások ellenére az "ie" továbbra is fontos szerepet játszik. Az emberek törekednek arra, hogy a hagyományos értékeket megőrizzék, miközben alkalmazkodnak a modern életstílushoz.

                Az "ie" tehát nem csupán egy lakóhelyet jelent a japán kultúrában, hanem a család és a közösség szimbolikus központját, ahol a hagyományok, értékek és rituálék találkoznak és ápolódnak.
                A japán kultúrában a családi ünnepek, mint például az Újév (お正月, Oshōgatsu) és a Kecske Nap (こどもの日, Kodomo no Hi) különleges alkalmak, amikor a családok összegyűlnek, és közösen ünneplik a hagyományokat és az egymás iránti szeretetet.`}
                image={"images/samurai-house.png"}
                words={homeRelatedWords}
                modalTitle={'いえ (ie - otthon)'}
                />
            </div>
        </div>
    )
}