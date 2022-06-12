/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import { makeAutoObservable, runInAction } from 'mobx';
import { EditProfileInput } from '../components/EditProfile/ui/edit-profile-formik';

import { IUser } from '../models/IUser';
import UserService from '../services/userService';

export type UpdReqStatus = {
  id: number | null;
  reqStatus: string | null;
};

export type RemoveUserTeam = {
  userId?: number | null;
};

export type UpdateUserInfo = {
  surname: '';
  name: '';
  patronymic: '';
  post_status: '';
  place_of_work_stud: '';
  birthdate: '';
  phone: '';
  move_to: '';
  move_from: '';
};

const initialValues: IUser = {
  id: null,
  imagePath: '',
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
  invites: [],
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

  updateInfo(data: UpdateUserInfo) {
    this.user = {
      ...this.user,
      surname: data.surname,
      name: data.name,
      patronymic: data.patronymic,
      birthdate: data.birthdate,
      phone: data.phone,
      move_to: data.move_to,
      move_from: data.move_from,
      post_status: data.post_status,
      place_of_work_stud: data.place_of_work_stud,
    };
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

      this.updateInfo(response.data);
      this.setProfileIsFilled(true);
    } catch (err) {
      console.log(err);
      throw new Error(String(err));
    }
  }

  async setImage(data: FormData) {
    try {
      const response = await UserService.setImage(data);
      console.log(response.data);

      runInAction(() => {
        this.user.imagePath = response.data;
      });
    } catch (err) {
      console.log(err);
    }
  }

  async updateRequestStatus(data: UpdReqStatus) {
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

  async removeUserTeam(data: RemoveUserTeam) {
    try {
      await UserService.removeUserTeam(data);
      runInAction(() => {
        this.rootStore.teamStore.team.users =
          this.rootStore.teamStore.team.users.filter(
            (user: IUser) => user.id !== data.userId,
          );
        console.log(this.rootStore.teamStore.team.users);
      });
    } catch (err) {
      console.log(err);
    }
  }
}
