import { AxiosResponse } from 'axios';
import { EditProfileInput } from '../components/EditProfile/ui/edit-profile-formik';
import { IUser } from '../models/IUser';
import $api from '../http';
import { AuthResponse } from '../models/response/authResponse';
import { IUpdReqStatus } from '../models/IUpdReqStatus';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('users/getAll');
  }

  static editUser(data: EditProfileInput): Promise<AxiosResponse<IUser>> {
    return $api.post<IUser>('users/editUser', data);
  }

  static updateRequestStatus(
    data: IUpdReqStatus,
  ): Promise<AxiosResponse<string>> {
    return $api.post<string>('users/updReqStatus', data);
  }
}
