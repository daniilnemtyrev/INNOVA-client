import { AxiosResponse } from 'axios';
import $api from '../http';
import { AuthResponse } from '../models/response/authResponse';
import { RegistInput } from '../components/Regist/ui/regist-formik';

export default class AuthService {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('auth/login', { email, password });
  }

  static async registration(
    data: RegistInput,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('auth/registration', data);
  }

  static async logout(): Promise<void> {
    return $api.post('auth/logout');
  }
}
