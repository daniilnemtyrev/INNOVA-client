import { IUser } from './../models/IUser';
import $api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/authResponse';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('/users');
  }
}
