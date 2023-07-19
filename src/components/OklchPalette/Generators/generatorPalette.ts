import {oklch, parse, formatHex} from "culori";
import {mapValues} from "lodash";


// lightnessValue
const LIGHTNESS_SCALE = {
    "100": 1,
    "95": 0.975,
    "90": 0.9,
    "80": 0.81,
    "70": 0.72,
    "60": 0.63,
    "50": 0.54,
    "40": 0.45,
    "30": 0.36,
    "20": 0.27,
    "10": 0.18,
    "0": 0,
};

const CHROMA_SCALE = {
    '100': 1,
    '95': 0.022,
    '90': 0.046,
    '80': 0.067,
    '70': 0.066,
    '60': 0.065,
    '50': 0.063,
    '40': 0.061,
    '30': 0.059,
    '20': 0.057,
    '10': 0.054,
    '0': 0,
}

const getBackgroundColorSaturation = (lightnessValue: number) => {
    const SATURATION_VALUES = {min: 0.004, max: 0.008}; // 0 => 0.322

    const getSaturation = ({
                               min,
                               max
                           }: { min: number; max: number }, factor: number): number => min + (max - min) * factor;

    const getSaturationGradient = (lightnessValue: number) => {
        const lightnessMax = LIGHTNESS_SCALE[100];
        const lightnessMin = LIGHTNESS_SCALE[0];
        const range = lightnessMax - lightnessMin;
        return 1 - (lightnessValue - lightnessMin) / range;
    };
    return getSaturation(
        SATURATION_VALUES,
        getSaturationGradient(lightnessValue)
    )
};
const getPrimaryColorSaturation = (
    lightnessValue: number,
    brandOklchColor: LCHColor
) => {
    if (brandOklchColor.c <= 0.012) {
        return brandOklchColor.c;
    }

    const isLighterThanBrandLightness = lightnessValue > brandOklchColor.l;

    const lightestPoint = {c: 0.012, l: LIGHTNESS_SCALE[100]};
    const darkestPoint = {c: 0.012, l: LIGHTNESS_SCALE[0]};

    // алгоритм получение градиета chroma
    const getSaturationGradient = (first: { c: number; l: number }, second: { c: number; l: number }): number => (second.c - first.c) / (second.l - first.l);

    const secondPoint = isLighterThanBrandLightness
        ? lightestPoint
        : darkestPoint;
    const saturationGradient = getSaturationGradient(
        brandOklchColor,
        secondPoint
    );
    const offset = secondPoint.c - saturationGradient * secondPoint.l;
    return (
        getSaturationGradient(brandOklchColor, secondPoint) * lightnessValue + offset
    );
};

type LCHColor = {
    mode: "oklch";
    c: number;
    h: number;
    l: number;
};

const upperCase = (string: string) => string.toUpperCase();

const ScaleLogic = {
    /**
     * Grayscale
     * Iterate over the lightness scale for the color space
     * use lightness from scale
     * use chroma (saturation) of constant 0
     * use hue of constant 0
     */
    grayscale: (lightnessValue: number) => ({
        mode: "oklch",
        l: lightnessValue,
        h: 0,
        c: 0
    }),
    /**
     * Background colors
     * Iterate over the lightness scale for the color space
     * use lightness from scale
     * ramp chroma (saturation) from min 0.004 to max 0.008
     * leave hue as original value
     */
    background: (oklchColor: LCHColor) => (lightnessValue: number) => ({
        ...oklchColor,
        c: getBackgroundColorSaturation(lightnessValue),
        l: lightnessValue
    }),
    brand: (oklchColor: LCHColor) => (lightnessValue: number) => ({
        ...oklchColor,
        c: getPrimaryColorSaturation(lightnessValue, oklchColor),
        l: lightnessValue
    }),
    secondary: (oklchColor: LCHColor) => (lightnessValue: number) => ({
        ...oklchColor,
        c: 0.035,
        l: lightnessValue
    }),

};
export const getBackgroundPalette = (hexColor: string) => {
    const oklchColor = oklch(parse(hexColor));

    // Black has no hue when converted from hex to oklch
    const hasMissingHue = !oklchColor.h;

    const getOklchColorForLightnessValue = hasMissingHue
        ? ScaleLogic.grayscale
        : ScaleLogic.background(oklchColor);

    return mapValues(LIGHTNESS_SCALE, (lightnessValue: number) =>
        upperCase(formatHex(getOklchColorForLightnessValue(lightnessValue)))
    );
};

export const getPrimaryPalette = (hexColor: string) => {
    // Convert hex into provided color scale
    const oklchColor = oklch(parse(hexColor));
    // console.log(mapValues(LIGHTNESS_SCALE, (lightnessValue: number) => ScaleLogic.brand(oklchColor)(lightnessValue)))
    return mapValues(LIGHTNESS_SCALE, (lightnessValue: number) =>
        upperCase(formatHex(ScaleLogic.brand(oklchColor)(lightnessValue)))
    );
};
export const getSecondaryPalette = (hexColor: string) => {
    // Convert hex into provided color scale
    const oklchColor = oklch(parse(hexColor));
    // console.log(mapValues(LIGHTNESS_SCALE, (lightnessValue: number) => ScaleLogic.secondary(oklchColor)(lightnessValue)))
    return mapValues(LIGHTNESS_SCALE, (lightnessValue: number) =>
        upperCase(formatHex(ScaleLogic.secondary(oklchColor)(lightnessValue)))
    );
}

/* третий цвет и его chroma
* 10: 0.054
* 20: 0.057
* 30: 0.059
* 40: 0.061
* 50: 0.063
* 60: 0.065
* 70: 0.066
* 80: 0.067
* 90: 0.053
* 100: 0.0215
* */