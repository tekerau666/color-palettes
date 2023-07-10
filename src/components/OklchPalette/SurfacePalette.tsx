/*
import {getBackgroundPalette} from "./generatorPalette";
import {useState} from "react";
import {readableColor} from "polished";
import {ColorInput} from "./ColorInput";

export const SurfacePalette = ({initialColor, paletteGenerator}: {
	initialColor: string;
	copyable?: boolean;
	paletteGenerator: typeof getBackgroundPalette;
}) => {
	const [color, setColor] = useState(initialColor);
	const palette = paletteGenerator(color);
	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				minWidth: "200px"
			}}
		>
			<div>
				<ColorInput color={color} onChange={setColor}/>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					minWidth: "200px"
				}}
			>
				{/!*Отрисовка блоков и шейдов*!/}
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
			</div>
		</div>
	)
};*/
