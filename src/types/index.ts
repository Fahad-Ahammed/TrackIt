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
