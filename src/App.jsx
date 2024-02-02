import { useState, useEffect } from 'react';
import './App.css';

function App() {

    const [length, setLength] = useState(8);
    const [numbers, setNumbers] = useState(false);
    const [chars, setChars] = useState(false);
    const [password, setPassword] = useState("");

    useEffect(() => {
        let string = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"; 
        let numeric = "0123456789";
        let punctuation = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
        let genPassword = "";

        if(numbers) { string += numeric; }
        if(chars) { string += punctuation};

        for(let i = 0; i < length; i++) {
            genPassword += string[Math.floor(Math.random() * string.length)];
        }

        setPassword(genPassword);

    }, [length, numbers, chars]);

    return (
        <div>
            <input type="text" placeholder="Password" value={password} readOnly />
            <button type="button" onClick={() => {
                window.navigator.clipboard.writeText(password);
            }}>Copy</button>

            <br></br>

            <input type="range" min={1} max={40} value={length} onChange={(event) => {
                setLength(event.target.value);
            }} />
            <label>Length: {length}</label>

            <input type="checkbox" onClick={() => {
                setNumbers(!numbers);
            }} />
            <label>Numbers</label>

            <input type="checkbox" onClick={() => {
                setChars(!chars);
            }} />
            <label>Characters</label>
        </div>  
    );
}

export default App;
