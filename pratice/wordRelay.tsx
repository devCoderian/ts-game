import { useState, useRef, useCallback } from "react";
import * as React from 'react';


const WordRelay = () =>{

    const [word, setWord] = useState('사이다');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const refEl = useRef<HTMLInputElement>(null);
    const onChange = useCallback<(e:React.ChangeEvent<HTMLInputElement>) => void>((e)=>{
        setValue(e.currentTarget.value)
    }, [])
    const submit = useCallback(()=>{
        const input = refEl.current;
        // e.preventDefault();
        
        if(word[word.length -1] === value[0]){
            setWord(value);
            setValue('');
            setResult('정답')
            input!.focus();
        }else{
            console.log('오답');
            setValue(''); 
            setResult('오답')
            input!.focus();
          //e:React.FormEvent<HTMLButtonElement>
        }
    },[value, word]);
    return(
        <>
        <div>
            {word}
            <input 
            ref = {refEl}
            type = "text"
            value = {value}
            onChange = {onChange}
            />  
            <button onClick = {submit}>제출</button>
            {result}
        </div>
        </>
    );
}

export default WordRelay;
//jsx에다가 함수를 넣으면 다 useCallback으로 감싸기