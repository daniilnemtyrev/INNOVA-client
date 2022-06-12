import { AxiosResponse } from 'axios';
import { EditProfileInput } from '../components/EditProfile/ui/edit-profile-formik';
import { IUser } from '../models/IUser';
import $api from '../http';
import {
  RemoveUserTeam,
  UpdateUserInfo,
  UpdReqStatus,
} from '../stores/user-store';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('users/getAll');
  }

  static getConfirmedUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('users/getConfirmedUsers');
  }

  static setImage(data: FormData): Promise<AxiosResponse<string>> {
    return $api.post<string>(`users/${data.get('id')}/setImage`, data);
  }

  static editUser(
    data: EditProfileInput,
  ): Promise<AxiosResponse<UpdateUserInfo>> {
    return $api.post<UpdateUserInfo>('users/edtUser', data);
  }

  static updateRequestStatus(
    data: UpdReqStatus,
  ): Promise<AxiosResponse<string>> {
    return $api.post<string>('users/updReqStatus', data);
  }

  static removeUserTeam(data: RemoveUserTeam): Promise<AxiosResponse<string>> {
    return $api.post<string>('users/removeUserTeam', data);
  }
}
