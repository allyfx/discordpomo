import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface IButtonProps {
  children: ReactNode;
  loading?: boolean;
}

export function Button({ children, loading = false }: IButtonProps) {
  return (
    <ButtonContainer>
      {loading ? "Carregando..." : children}
    </ButtonContainer>
  );
}
