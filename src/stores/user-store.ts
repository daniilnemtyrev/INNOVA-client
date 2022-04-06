import { makeAutoObservable } from 'mobx';
import { IUser } from '../models/IUser';

export default class UserStore {
  rootStore;
  user = {} as IUser;

  constructor(rootStore: any) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  setUser(user: IUser) {
    this.user = user;
  }
}
