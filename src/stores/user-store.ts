import { makeAutoObservable, runInAction } from 'mobx';
import { EditProfileInput } from '../components/EditProfile/ui/edit-profile-formik';
import { IUpdReqStatus } from '../models/IUpdReqStatus';

import { IUser } from '../models/IUser';
import UserService from '../services/userService';

const initialValues: IUser = {
  id: null,
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
  roles: [{ id: null, value: '', description: '' }],
  teamId: null,
  projectId: null,
  team: {
    name: '',
  },
  project: {
    name: '',
  },
};

export default class UserStore {
  rootStore;

  user = initialValues;

  confirmedUsers: IUser[] = [];

  profileIsFilled = false;

  constructor(rootStore: any) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setConfirmedUsers(users: IUser[]) {
    this.confirmedUsers = users;
  }

  setProfileIsFilled(value: boolean) {
    this.profileIsFilled = value;
  }

  async editUser(data: EditProfileInput) {
    const dataWithId = {
      ...data,
      id: this.user.id,
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

  async getConfirmedUsers() {
    try {
      const response = await UserService.getConfirmedUsers();

      runInAction(() => {
        this.setConfirmedUsers(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }
}
