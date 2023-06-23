import {FC, ReactNode} from "react";
import style from './Button.module.scss'
interface ButtonProps {
    children: ReactNode,
    type?: 'submit' | 'button',
    backgroundColor?: string | 'black',
    onClick?: any
}

export const Button: FC<ButtonProps> = ({ children, type, backgroundColor, onClick }) => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                <button onClick={onClick} type={type} className={style.button} style={{backgroundColor: `${backgroundColor}`}}>
                    {children}
                </button>
            </div>
        </>
    )
}