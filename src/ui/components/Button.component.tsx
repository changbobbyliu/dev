import { FC } from "react";

type TProps = {
	leftIcon?: string;
	title: string;
	action?: () => void;
	containerClassName?: string;
};

export const Button: FC<TProps> = ({ title, action, containerClassName }) => {
	const disabled = action === undefined;

	return (
		<span
			className={`inline-block px-4 py-2 rounded-md bg-cyan-600 shadow-sm text-white ${
				disabled ? "bg-gray-300" : "hover:bg-cyan-500 transition-colors cursor-pointer"
			} ${containerClassName}`}
			onClick={action}
		>
			{title}
		</span>
	);
};
