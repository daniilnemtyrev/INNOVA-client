import $api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/authResponse';
import { Message } from '../interfaces/IChat';
import { LogoutResponse } from '../models/response/logoutResponse';

export default class AuthService {
  static async login(
    email: string,
    name: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', { email, name, password });
  }

  static async registration(
    email: string,
    name: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/registration', { email, name, password });
  }

  static async logout(messages: Message[]): Promise<void> {
    console.log(messages);
    return $api.post('/logout', messages);
  }
}
