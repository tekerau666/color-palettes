import {getPrimaryPalette, getSecondaryPalette} from "../Generators/generatorPalette";
import {PaletteGenerator} from "../Generators/PaletteGenerator";
import {useState} from "react";
import {Button} from "../../Button/Button";

const THEME = {
    background: "#1B283B",
    brand: "#6750A4"
};
export default function OklchPalette() {
    const [showPalette, setShowPalette] = useState(false)
    return (
        <div

        >
			<Button
				type='button'
				onClick={() => setShowPalette(!showPalette)}
				width='400px'
				height='50px'
			>
				CHANGE THEME COLOR
			</Button>
			{showPalette &&
				<div
					style={{
					maxWidth: "800px"
				}}
				>
					<h2>Brand</h2>
					<PaletteGenerator
						key={"brand"}
						initialColor={THEME.brand}
						getPrimaryPaletteColor={getPrimaryPalette}
						getSecondaryPaletteColor={getSecondaryPalette}
					/>
				</div>
			}
        </div>
    );
}