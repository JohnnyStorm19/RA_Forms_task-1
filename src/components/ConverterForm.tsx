import { useState } from "react";
import { ConverterResult } from "./ConverterResult";
import { hexToRgbConvert } from "../helpers/hexToRgbConvertFunc";
import { formStyle } from "../styles/formStyle";

export function ConverterForm() {
    const [form, setForm] = useState({
        hex: ''
    });

    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault()
        console.log('is submitted')
    }

    const onChangehandler = ({ target }:React.FormEvent) => {
        const { value } = target as HTMLInputElement;
        setForm({
            ...form,
            hex: value
        })
    }
    return (
        <form 
            style={ 
                String(form.hex).length >= 7 ? 
                formStyle({convertResult: hexToRgbConvert(form.hex)}): 
                formStyle( {} ) 
            }
            onSubmit={onSubmitHandler}
        >
            <input 
                type="text" 
                autoComplete="off"
                name="hex-input" 
                id="converter-input" 
                value={form.hex} 
                onChange={onChangehandler}
                placeholder="write your hex-color (for example: #9921ff)" 
            />
            {
                String(form.hex).length >= 7 ? 
                <ConverterResult convertResult={hexToRgbConvert(form.hex) }/> : 
                <ConverterResult convertResult={{}}/>
            }
        </form>
    )
}