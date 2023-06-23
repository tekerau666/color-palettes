import {FC, ReactNode} from "react";

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary',
}

interface CardProps {
	width?: string;
	height?: string;
	variant: CardVariant;
	children: ReactNode;
	onClick: () => void;
}

export const Card: FC<CardProps> =
	({ width, height, children , variant, onClick}) => {
	return (
		<>
			<div style={{width, height,
				border: variant === CardVariant.outlined  ? '1px solid grey' : 'none',
				backgroundColor: variant === CardVariant.primary ? 'lightgray' : 'white',
			}}
				onClick={onClick}
			>
				{children}
			</div>
		</>
	)
}