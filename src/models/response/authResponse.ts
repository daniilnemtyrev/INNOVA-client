import { IUser } from '../IUser';

export interface AuthResponse {
  acessToken: string;
  refreshToken: string;
  user: IUser;
}
