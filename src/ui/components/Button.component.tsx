import { FC } from "react";

type TProps = {
	leftIcon?: string;
	title: string;
	action: () => void;
	containerClassName?: string;
};

export const Button: FC<TProps> = ({ title, action, containerClassName }) => {
	return (
		<span
			className={`px-4 py-2 rounded-md bg-cyan-600 shadow-sm text-white cursor-pointer hover:bg-cyan-500 transition-colors ${
				containerClassName || ""
			}`}
			onClick={action}
		>
			{title}
		</span>
	);
};
