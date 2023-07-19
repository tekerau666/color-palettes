import * as React from "react";
import {readableColor} from "polished";
import {getBackgroundPalette, getPrimaryPalette, getSecondaryPalette} from "./generatorPalette";
import {useEffect, useState} from "react";
import {ColorInput} from "../Palettes/ColorInput";
import {NeutralColorPalette} from "../Palettes/NeutralColorPalette";



export const PaletteGenerator = ({initialColor, getPrimaryPaletteColor, getSecondaryPaletteColor, showColorInput = true}: {
    initialColor: string;
    getPrimaryPaletteColor: typeof getPrimaryPalette;
    getSecondaryPaletteColor: typeof getSecondaryPalette;
    showColorInput?: boolean;
}) => {
    const [color, setColor] = useState(initialColor);
    const palette = getPrimaryPaletteColor(color);
    const minorColors = getSecondaryPaletteColor(palette['50'])
    const color90 = palette['90']
    const color40 = palette['40']
    const color10 = palette['10']
    document.documentElement.style.setProperty('--primary-color', color40)
    document.documentElement.style.setProperty('--primary-container', color90)
    document.documentElement.style.setProperty('--primary-dark', color10)
    document.documentElement.style.setProperty('--secondary-dark', minorColors['10'])
    document.documentElement.style.setProperty('--secondary-color', minorColors['40'])
    document.documentElement.style.setProperty('--secondary-container', minorColors['90'])
    document.documentElement.style.setProperty('--tertiary-color', color10)
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                minWidth: "200px"
            }}
        >
            { showColorInput &&
                <div>
                    <ColorInput color={color} onChange={setColor}/>
                </div>
            }
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    minWidth: "200px"
                }}
            >
                {/*Отрисовка блоков и шейдов*/}
                {Object.entries(palette)
                    .map(([shade, color]) => {
                        return (
                            <div
                                key={`${color}-${shade}`}
                                style={{
                                    background: color,
                                    textAlign: "center"
                                }}
                                title={color.toUpperCase()}
                            >
                                {color}
                                <p style={{color: readableColor(color, "#111", "white")}}>
                                    {shade}
                                </p>
                            </div>
                        );
                    })}
                {Object.entries(minorColors)
                    .map(([shade, color]) => {
                        return (
                            <div
                                key={`${color}-${shade}`}
                                style={{
                                    background: color,
                                    textAlign: "center"
                                }}
                                title={color.toUpperCase()}
                            >
                                {color}
                                <p style={{color: readableColor(color, "#111", "white")}}>
                                    {shade}
                                </p>
                            </div>
                        );
                    })}
                <NeutralColorPalette
                    initialColor={color}
                    paletteGenerator={getBackgroundPalette}
                />
            </div>
        </div>
    )
};

