import AuthStore from './auth-store';
import ProjectStore from './project-store';
import UserStore from './user-store';

export class RootStore {
  authStore;
  userStore;
  projectStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
    this.projectStore = new ProjectStore(this);
  }
}
