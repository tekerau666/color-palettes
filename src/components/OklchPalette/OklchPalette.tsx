import * as React from "react";
import {readableColor} from "polished";
import {getBackgroundPalette, getBrandPalette, getSecondaryPalette, getTertiaryPalette} from "./generatorPalette";
import {HexColorPicker} from "react-colorful";
import {useEffect, useState} from "react";
import {ColorInput} from "./ColorInput";

const THEME = {
    background: "#1B283B",
    brand: "#6750A4"
};

export const Palette = ({initialColor, paletteGenerator, getPaletteColor, showColorInput = true}: {
    initialColor: string;
    paletteGenerator: typeof getBrandPalette;
    showColorInput?: boolean;
    getPaletteColor: typeof getSecondaryPalette;
}) => {
    const [color, setColor] = useState(initialColor);
    const palette = paletteGenerator(color);
    const minorColors = getPaletteColor(palette['50'])
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
            </div>
        </div>
    )
};
export default function OklchPalette() {
    return (
        <div
            style={{
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                maxWidth: "800px"
            }}
        >
           {/* <h2>Background</h2>
            <Palette
                key={"background"}
                initialColor={THEME.background}
                paletteGenerator={getBackgroundPalette}
                showColorInput={false}
            />*/}
            <h2>Brand</h2>
            <Palette
                key={"brand"}
                initialColor={THEME.brand}
                paletteGenerator={getBrandPalette}
                getPaletteColor={getSecondaryPalette}
            />
            {/*
            <h2>Secondary</h2>
            <Palette
                key={"brand"}
                initialColor={'#674cb2'}
                paletteGenerator={getSecondaryPalette}
                showColorInput={false}
            />*/}

        </div>
    );
}
