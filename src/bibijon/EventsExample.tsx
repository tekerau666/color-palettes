import React, {ChangeEvent, useRef, useState} from "react";

export const EventsExample = () => {
	const [value, setValue] = useState<string>('')
	const inputRef = useRef<HTMLInputElement>(null)
	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	const clickHandler = (e: React.MouseEvent <HTMLButtonElement>) => {
		console.log(inputRef.current?.value)
	}
	return (
		<>
			<input type="text" value={value} onChange={changeHandler} placeholder='управляемый'/>
			<input type="text" ref={inputRef} placeholder='неуправляемый'/>
			<button onClick={clickHandler}>
				how
			</button>
		</>
	)
}