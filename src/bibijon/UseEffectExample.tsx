import React, { FC, useRef, useLayoutEffect } from "react";

export const ScrollToBottom: FC = () => {
	// useRef используется для получения ссылки на html элемент
	const boxRef = useRef(null);

	useLayoutEffect(() => {
		// Осуществляем скролл вниз элемента, до того как элемент
		// будет отрендерен, это предотвратит появление элемента со скролом вверху
		// и резким скроллом вниз
		boxRef.current.scrollTo({ top: boxRef.current.scrollHeight });
	}, [])

	return (
		<div ref={boxRef}>
			... длинный контент
		</div>
	);
};