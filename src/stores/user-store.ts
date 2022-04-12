import { makeAutoObservable } from 'mobx';
import { ProfileInput } from '../components/Profile/form/profile-formik';
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
  place_of_work_stud: '',
  birthdate: '',
  phone: '',
  move_to: '',
  move_from: '',
};

export default class UserStore {
  rootStore;
  user = initialValues;

  constructor(rootStore: any) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async editUser(data: ProfileInput) {
    const dataWithId = {
      ...data,
      id: this.user.id,
    };

    try {
      const response = await UserService.editUser(dataWithId);

      this.setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  }
}
