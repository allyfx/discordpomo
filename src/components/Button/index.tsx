import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

export function Button({ children, loading = false, ...rest }: IButtonProps) {
  return (
    <ButtonContainer {...rest}>
      {loading ? "Carregando..." : children}
    </ButtonContainer>
  );
}
