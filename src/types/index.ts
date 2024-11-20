export type SignUpFormData = {
  name: string;
  email: string;
  password: string;
};

export type SignInFormData = Omit<SignUpFormData, "name">;

export type FormErrors = {
  name?: string;
  email?: string;
  password?: string;
  serverError?: string;
};

export type InputTypes = {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  value: string;
  error?: string;
  labelBg?: string;
  autoFocus?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
