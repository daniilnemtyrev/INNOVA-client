import { makeAutoObservable, runInAction } from 'mobx';
import { EditProfileInput } from '../components/EditProfile/form/edit-profile-formik';
import { IUpdReqStatus } from '../models/IUpdReqStatus';

import { IUser } from '../models/IUser';
import UserService from '../services/userService';

const initialValues: IUser = {
  userId: null,
  email: '',
  password: '',
  surname: '',
  name: '',
  patronymic: '',
  post_status: '',
  request_status: '',
  place_of_work_stud: '',
  birthdate: '',
  phone: '',
  move_to: '',
  move_from: '',
};

export default class UserStore {
  rootStore;
  user = initialValues;
  profileIsFilled = false;

  constructor(rootStore: any) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setProfileIsFilled(value: boolean) {
    this.profileIsFilled = value;
  }

  async editUser(data: EditProfileInput) {
    const dataWithId = {
      ...data,
      userId: this.user.userId,
    };

    try {
      const response = await UserService.editUser(dataWithId);

      this.setUser(response.data);
      this.setProfileIsFilled(true);
    } catch (err) {
      console.log(err);
    }
  }

  async updateRequestStatus(data: IUpdReqStatus) {
    try {
      const response = await UserService.updateRequestStatus(data);
      runInAction(() => {
        this.user.request_status = response.data;
      });
    } catch (err) {
      console.log(err);
    }
  }
}
