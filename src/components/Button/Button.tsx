import {FC, ReactNode} from "react";
import style from './Button.module.scss'
interface ButtonProps {
    children: ReactNode,
    type?: 'submit' | 'button',
    onClick?: any,
    width?: string
    height?: string,
}

export const Button: FC<ButtonProps> = ({ children, type, onClick, width, height}) => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                <button onClick={onClick} type={type} className={style.button} style={{width: `${width}`, height: `${height}`}}>
                    {children}
                </button>
            </div>
        </>
    )
}