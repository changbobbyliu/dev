import { FC } from "react";
import Image from "next/image";

type TProps = {
  leftIcon: string;
  title: string;
  subtitle: string;
};

export const Card: FC<TProps> = ({ leftIcon, title, subtitle }) => {
  return (
    <div className="p-6 max-w-sm bg-white rounded-xl shadow-lg flex items-center space-x-4 hover:bg-gray-50 active:ring-2 active:ring-slate-200 cursor-pointer">
      <div className="shrink-0">
        <Image className="h-12 w-12" src={leftIcon} alt={title} />
      </div>
      <div>
        <div className="text-xl font-medium text-black">{title}</div>
        <p className="text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
};
