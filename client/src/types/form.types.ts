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
  title: string;
  description: string;
  completed: boolean;
  category: string;
  userId: string;
  dueDate: string;
}
