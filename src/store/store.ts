import { makeAutoObservable } from 'mobx';
import { IUser } from '../models/IUser';
import AuthService from '../services/authService';
import axios from 'axios';
import { AuthResponse } from '../models/response/authResponse';
import { Message } from '../interfaces/IChat';

export default class Store {
  user = {} as IUser;
  IsAuth = false;
  IsSend = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.IsAuth = bool;
  }

  setSend(bool: boolean) {
    this.IsSend = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async login(email: string, name: string, password: string) {
    try {
      const response = await AuthService.login(email, name, password);
      console.log(response);
      localStorage.setItem('token', response.data.acessToken);
      this.setAuth(true);
      this.setSend(true);
      console.log(this.IsAuth);
      this.setUser(response.data.user);
    } catch (err) {
      this.setSend(true);
      console.log(err);
    }
  }

  async registration(email: string, name: string, password: string) {
    try {
      const response = await AuthService.registration(email, name, password);
      console.log(response);
      localStorage.setItem('token', response.data.acessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (err) {
      console.log(err);
    }
  }

  async logout(messages: Message[]) {
    try {
      const response = await AuthService.logout(messages);
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setSend(false);
      this.setUser({} as IUser);
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
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }
}
