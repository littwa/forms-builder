export interface User {
  token: string;
  email: string;
  password: string;
  agree?: boolean;
  id?: number;
}

export interface UserRegister {
  email: string;
  password: string;
  agree: boolean;
}

export interface Error {
  code: number;
  message: string;
}

export interface AuthResponse {
  accessToken: string;
}

export interface GeneralStyle {
  stylesGeneral: any,
  stylesGeneralInner: any,
}
export interface MatchStyle {
  border?: string,
  borderRadius?: string,
  fontSize?: string,
  padding?: string,
  backgroundColor?: string,
  width?: string,
  height?: string,
}

export interface ValueInput {
  placeholder: string;
  required: boolean;
  select?: Array<any>;
}
