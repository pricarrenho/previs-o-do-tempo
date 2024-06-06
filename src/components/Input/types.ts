import { HTMLInputTypeAttribute } from "react";

export type InputProps = {
  value: string;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  onClear: (value: string) => void;
};
