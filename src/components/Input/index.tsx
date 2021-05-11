import { InputHTMLAttributes } from "react";
import { InputContainer, InputElement, InputLabel } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...rest }: IInputProps) {
  return (
    <InputContainer>
      <InputLabel>
        {label}
      </InputLabel>
      <InputElement
        {...rest}
      />
    </InputContainer>
  )
}
