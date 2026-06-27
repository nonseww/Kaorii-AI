import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  title?: string;
  children: ReactNode;
}

export const CustomButton = ({ onClick, title, children }: Props) => {
  return (
    <button onClick={onClick} title={title}>
      {children}
    </button>
  );
};
