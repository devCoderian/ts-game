import { useState, useRef, useCallback } from "react";
import * as React from 'react';


const GuGuDan = () =>{

    const [first, setFirst] = useState(Math.ceil(Math.random()*9));
    const [second, setSecond] = useState(Math.ceil(Math.random()*9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef<HTMLInputElement>(null); //input! 사용을 위해 제네릭 타입 사용

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const input = inputEl.current;
        if(parseInt(value) === first * second){
            setResult('정답');
            setFirst(Math.ceil(Math.random()*9));
            setSecond(Math.ceil(Math.random()*9));
            setValue('');
            input!.focus(); //강제 포커스 //input!이 존재한다는 100% 확신을 가지고 있을때 사용
            //혹은
            // if(input){
            //     input.focus
            // }
        }else{
            setResult('오답');
            setValue('');
            input!.focus();
        }
    }

    return(
        <>

            <div>{first} 곱하기 {second} 는?</div>
            <form onSubmit = {onSubmitForm} >
                <input
                    ref = {inputEl}
                    type = "number"
                    value = {value}
                    onChange = {(e) => setValue(e.target.value)}
                />
            </form>
            <div>{result}</div> 
        </>
    )
}; 
export default GuGuDan;