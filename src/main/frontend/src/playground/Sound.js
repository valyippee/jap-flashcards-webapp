import React from 'react';

export default function Sound() {
    const synthRef = React.useRef(window.speechSynthesis);
    const [choices, setChoices] = React.useState([]);
    const [langVoice, setLangVoice] = React.useState(null);

    React.useEffect(() => {
        const voices = synthRef.current
            .getVoices()
            .filter((voice) => voice.lang.substr(0, 2) === "ja");
        setLangVoice(voices[0]);
    }, [])

    const words = "私はバレリーです";

    const choose = (word) => {
        const utter = new SpeechSynthesisUtterance(word);
        utter.voice = langVoice;
        synthRef.current.speak(utter);

    }

    return (
        <div>
            <h2>Press the button!</h2>

            <button onClick={() => choose(words)}>{words}</button>
        </div>
    )



}
