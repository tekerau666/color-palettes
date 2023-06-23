import * as chroma from 'chroma-js'
import {FC, useCallback, useEffect, useState} from "react";
import style from "../Palette/Palette.module.scss";
import {Button} from "../Button/Button";

interface PaletteProps {
    hexState: string
}

export const Palette: FC<PaletteProps> = ({hexState}) => {
    const [paletteColors, setPaletteColors] = useState<Record<number, string[]>>([])
    const [showColor, setShowColor] = useState<boolean>(false)

    const getPaletteColors = useCallback((countPalettes: number) => {
        const palettes: Record<number, string[]> = {};
        for (let i = 0; i < countPalettes; i++) {
            const randomColor = chroma.random()
            const color = chroma.scale([hexState, randomColor]).mode('lab').colors(6);
            palettes[i] = color
        }
        console.log(palettes)
        setPaletteColors(palettes)
    }, [hexState])

    const handleClick = async () => {
        await getPaletteColors(4)
        await setShowColor(true)
    }
    return (
        <div>
            <Button
                type='submit'
                backgroundColor={hexState}
                onClick={() => handleClick()}
            >
                Generate
            </Button>
            <div className={style.container}>
                {showColor &&
                    <div className={style.modal}>
                        {
                            Object.entries(paletteColors).map(([key, value]) => (
                                <div key={key}>
                                    {value.map(color => (
                                        <div key={color} style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: color,
                                            marginTop: '5px',
                                            width: '80px',
                                            height: '80px',
                                            color: 'white'
                                        }}>{color}</div>
                                    ))}
                                </div>

                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}