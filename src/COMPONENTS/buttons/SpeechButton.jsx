export function SpeechButton({ text }) {
    const handleSpeak = () => {
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.onend = () => {
            console.log('Speech has finished.');
          };
          utterance.onerror = (event) => {
            console.error('SpeechSynthesisUtterance.onerror', event);
          };
          speechSynthesis.speak(utterance);
        } else {
          alert('Speech Synthesis not supported in this browser.');
        }
      };
    return (
        <button onClick={handleSpeak}>
            Felolvasás
        </button>
    );
};
