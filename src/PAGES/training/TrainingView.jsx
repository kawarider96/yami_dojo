import { useEffect, useState } from "react";
import { Xinput } from "../../COMPONENTS/inputs/Xinput";
import { hiraganaAlphabet } from "../../SUPPORT/DATA/abc-data";
import { BasicButton } from "../../COMPONENTS/buttons/BasicButton";

export function TrainingView() {
    const [answer, setAnswer] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [helperText, setHelperText] = useState('');
    const [score, setScore] = useState(0);
    const [trainingMode, setTrainingMode] = useState('easy');
    const [showText, setShowText] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);

    const triggerAnimation = () => {
      setShowText(false);
      setAnimationKey(prev => prev + 1);
      setTimeout(() => {
        setShowText(true);
      }, 10); // Rövid késleltetés az újraindításhoz
    };

    useEffect(() => {
        generateQuestion();
    }, []);

    const generateQuestion = () => {
        const validCharacters = hiraganaAlphabet.filter(item => item.hiragana !== '');
        const randomIndex = Math.floor(Math.random() * validCharacters.length);
        setCurrentQuestion(validCharacters[randomIndex]);
    };

    const handleAnswerChange = (e) => {
        setAnswer(e.target.value.toLowerCase());
    };

    const checkAnswer = () => {
        if (answer === currentQuestion.romanji) {
            setHelperText({ text: 'Gratulálok, helyes válasz!', color: 'green' });
            updateScore(true);
            setAnswer('');  // Reset the answer input
            generateQuestion();  // Generate a new question
        } else {
            setHelperText({ text: 'Helytelen válasz, próbáld újra!', color: 'red' });
            updateScore(false);
            triggerAnimation();
        }
    };

    const updateScore = (isCorrect) => {
        let points = 0;

        if (trainingMode === 'easy') {
            points = isCorrect ? 10 : 0;
        } else if (trainingMode === 'medium') {
            points = isCorrect ? 5 : -10;
        } else if (trainingMode === 'hard') {
            points = isCorrect ? 2 : -10;
        }

        setScore(prevScore => Math.max(0, prevScore + points));
    };

    return (
        <div className="relative flex justify-center items-center h-screen">
            <img src="/images/cherry-bg.png" alt="Samurai" className="h-full absolute z-0 right-0 bottom-0"/>
            <div className="w-1/2 bg-samurai-gradient p-5 rounded-xl shadow-xl z-10">
                <div>
                    <h1 className="text-4xl font-bold text-center tracking-widest">Vajon melyik hiragana karakter látható a képen?</h1>
                </div>
                <div className="question mt-5 border p-5 rounded">
                    <h2 className="font-bold text-center text-4xl">{currentQuestion.hiragana}</h2>
                </div>
                <div className="answer mt-5 grid gap-5 text-center">
                    <Xinput
                        type={'text'}
                        label={'válasz'}
                        placeholder={'válasz'}
                        value={answer}
                        onChange={handleAnswerChange}
                    />
                          {showText && (
                            <div key={animationKey} className="text-center impact-animation text-red-500 text-4xl font-bold absolute top-[50%] left-[45%]">
                                <p>間違った答え</p>
                                <p>(Helytelen válasz!)</p>
                            </div>
                        )}
                    <BasicButton action={checkAnswer}>
                        Ellenőrzés
                    </BasicButton>
                </div>
                <div className={`mt-3 text-${helperText.color}-500`}>
                    {helperText.text}
                </div>
                <div className="score mt-5 text-center">
                    <h2 className="text-2xl">Pontszám: {score}</h2>
                </div>
            </div>
        </div>
    );
}