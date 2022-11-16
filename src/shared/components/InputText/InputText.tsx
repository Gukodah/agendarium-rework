interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  validators: Array<(value: string) => undefined | string>;
}

const InputText = ({ type, value, placeholder, onChange }: InputTextProps) => {
  return <input type={type} value={value} onChange={onChange} placeholder={placeholder} />;
};

export { InputText };
