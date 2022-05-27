import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { IUser } from '../models/IUser';
import AuthService from '../services/authService';
import { AuthResponse } from '../models/response/authResponse';
import { RegistInput } from '../components/Regist/ui/regist-formik';

export default class AuthStore {
  rootStore;

  IsAuth = false;

  IsSend = false;

  errorMessage = '';

  constructor(rootStore: any) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  setAuth(bool: boolean) {
    this.IsAuth = bool;
  }

  setSend(bool: boolean) {
    this.IsSend = bool;
  }

  setErrorMessage(value: string) {
    this.errorMessage = value;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      console.log(response.data.user);
      localStorage.setItem('token', response.data.acessToken);
      this.setAuth(true);
      this.setSend(true);

      this.rootStore.userStore.setUser(response.data.user);
    } catch (err) {
      this.setErrorMessage('Неверный логин или пароль');
      this.setSend(true);
      console.log(err);
    }
  }

  async registration(data: RegistInput) {
    try {
      const response = await AuthService.registration(data);
      localStorage.setItem('token', response.data.acessToken);
      this.setAuth(true);
      this.rootStore.userStore.setUser(response.data.user);
    } catch (err) {
      console.log(err);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setSend(false);
      this.rootStore.userStore.setUser({} as IUser);
    } catch (err) {
      console.log(err);
    }
  }

  async checkAut() {
    try {
      const response = await axios.get<AuthResponse>(
        `http://localhost:4000/auth/refresh`,
        {
          withCredentials: true,
        },
      );
      localStorage.setItem('token', response.data.acessToken);
      this.setAuth(true);
      this.rootStore.userStore.setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }
}
