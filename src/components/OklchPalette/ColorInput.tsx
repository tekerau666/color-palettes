import {HexColorPicker} from "react-colorful";

export const ColorInput = ({color, onChange}: { color: string; onChange: (color: string) => void; }) => {
	return (
		<HexColorPicker color={color} onChange={(color) => onChange(color)}/>
	);
};