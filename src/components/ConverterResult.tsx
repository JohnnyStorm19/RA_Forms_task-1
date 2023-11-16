import { setTextColor } from "../helpers/setTextColor"
import { ConvererResultProps } from "../models"


export function ConverterResult({convertResult={}}: ConvererResultProps) {
    if (convertResult.success === false) {
        return (
            <span 
                className="rgb-result"
                style={ setTextColor('') }
            >
                Wrong hex-type! 
            </span>
        )
    }

    if (convertResult.success && convertResult.hex) {
        return (
            <span 
                className="rgb-result"
                style={ setTextColor(convertResult.hex) }
            >
                {convertResult.rgb}
            </span>
        )
    }

    return (
        <span 
            className="rgb-result"
            style={ setTextColor('black') }
        >
            No hex-color
        </span>
    )
}