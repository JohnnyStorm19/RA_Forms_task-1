import { CSSProperties } from "react";
import { TFormStyleArg } from "../models"


export function formStyle({convertResult = {}}: TFormStyleArg): CSSProperties {
    let formBackgroundColor = "#242424";

    if (convertResult.success === false) {
        formBackgroundColor = 'crimson';
    }
    if (convertResult.success && convertResult.rgb) {
        formBackgroundColor = convertResult.rgb;
    }

    return {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: formBackgroundColor
    }
}