import {getBackgroundPalette} from "../Generators/generatorPalette";
import {readableColor} from "polished";

export const NeutralColorPalette = ({initialColor, paletteGenerator}: {
	initialColor: string;
	copyable?: boolean;
	paletteGenerator: typeof getBackgroundPalette;
}) => {
	const palette = paletteGenerator(initialColor);
	return (
		<div
		>
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
			</div>
		</div>
	)
};
