import {ChangeEvent, FC, useEffect, useState} from "react";
import {HexColorInput, HexColorPicker} from "react-colorful";
import style from './Content.module.scss'
import {Button} from "../Button/Button";
import * as chroma from 'chroma-js'
import {Palette} from "../Palette/Palette";
import {ColorPicker} from "../ColorPicker/ColorPicker";

interface ContentProps {
    hex: string;
}


export const Content: FC<ContentProps> = () => {
    const [hexState, setHexState] = useState<string>('#000000')

    return (
        <>
            <div className={style.container}>
                <ColorPicker
                    hexState={hexState}
                    setHexState={setHexState}
                />
            </div>
            <Palette hexState={hexState} />
        </>
    )
}
