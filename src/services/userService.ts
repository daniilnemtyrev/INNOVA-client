import { AxiosResponse } from 'axios';
import { EditProfileInput } from '../components/EditProfile/ui/edit-profile-formik';
import { IUser } from '../models/IUser';
import $api from '../http';
import { RemoveUserTeam, UpdReqStatus } from '../stores/user-store';
import { IInvite } from '../models/IInvite';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('users/getAll');
  }

  static getConfirmedUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('users/getConfirmedUsers');
  }

  static editUser(data: EditProfileInput): Promise<AxiosResponse<IUser>> {
    return $api.post<IUser>('users/editUser', data);
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
