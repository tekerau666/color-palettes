import {HexColorPicker} from "react-colorful";
import {FC, useState} from "react";

interface ColorPickerProps {
	hexState: string
	setHexState: (hexState: string) => void
}
export const ColorPicker: FC<ColorPickerProps> = ({ hexState, setHexState }) => {
	const [inputState, setInputState] = useState<boolean>(false)
	return (
			<div>
				<input
					style={{backgroundColor: hexState}}
					type="text"
					value={hexState}
					onClick={() => setInputState(!inputState)}
					onChange={e => setHexState(e.target.value)}
				/>
				{/*
                        Полная хуета, если лучше не придумаю оставить (:
                    {inputState &&
                    <img src={arrow} alt="arrow" style={{width: '20px', height: '20px'}}/>
                }*/}
				{inputState &&
					<HexColorPicker
						color={hexState}
						onChange={setHexState}
						style={{boxShadow: ' 21px 16px 19px 5px rgba(34, 60, 80, 0.28)'}}
					/>
				}
			</div>
	)
}