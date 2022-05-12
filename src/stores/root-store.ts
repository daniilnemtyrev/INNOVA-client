import AuthStore from './auth-store';
import OtherStore from './other-store';
import ProjectStore from './project-store';
import UserStore from './user-store';

export class RootStore {
  authStore;
  userStore;
  projectStore;
  otherStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
    this.projectStore = new ProjectStore(this);
    this.otherStore = new OtherStore(this);
  }
}
