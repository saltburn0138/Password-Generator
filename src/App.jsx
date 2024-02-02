import { useState, useEffect } from 'react';
import './App.css';

function App() {

    const [length, setLength] = useState(8);
    const [numbers, setNumbers] = useState(false);
    const [chars, setChars] = useState(false);
    const [password, setPassword] = useState("");

    useEffect(() => {
        let string = "";
        let numeric = "";
        let punctuation = "";
        let genPassword = "";

        if(numbers) { string += numeric; }
        if(chars) { string += punctuation};

        for(let i = 0; i < length; i++) {

        }

    }, [length, numbers, chars]);

    return (
        <div>
            <input type="text" placeholder="Password" readOnly />
            <button type="button">Copy</button>

            <br></br>

            <input type="range" min={1} max={40} value={8} />

            <input type="checkbox" />
            <label>Numbers</label>

            <input type="checkbox" />
            <label>Characters</label>
        </div>  
    );
}

export default App;
