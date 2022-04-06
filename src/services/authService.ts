import $api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/authResponse';
import { Message } from '../interfaces/IChat';
import { RegistInput } from '../components/Regist/regist-formik';

export default class AuthService {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', { email, password });
  }

  static async registration(
    data: RegistInput,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/registration', data);
  }

  static async logout(): Promise<void> {
    return $api.post('/logout');
  }
}
