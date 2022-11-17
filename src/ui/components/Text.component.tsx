import { FC, PropsWithChildren } from "react";

export const Text: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-cyan-500">{children}</span>;
};
