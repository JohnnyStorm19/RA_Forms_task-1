export type TConvertResult = {
    success?: boolean;
    rgb?: string;
    hex?: string;
}

export type TFormStyleArg = {
    convertResult?: TConvertResult;
}

export type ConvererResultProps = {
    convertResult: TConvertResult
}

export type THexToRgbResult = {
    success: boolean;
    rgb?: string;
    hex?: string;
}