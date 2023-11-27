export interface LoginTypes {
  username: string;
  password: string;
}

export interface RegisterTypes {
  username: string;
  email: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

export interface TaskFormTypes {
  title: string | undefined;
  description: string | undefined;
  completed: boolean | undefined;
  category: string | undefined;
  userId: string | undefined;
}
