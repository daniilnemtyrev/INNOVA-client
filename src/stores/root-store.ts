import AuthStore from './auth-store';
import InvitesStore from './invite-store';
import OtherStore from './other-store';
import ProjectStore from './project-store';
import TeamStore from './team-store';
import UserStore from './user-store';

export class RootStore {
  authStore;

  userStore;

  projectStore;

  otherStore;

  teamStore;

  invitesStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
    this.projectStore = new ProjectStore(this);
    this.otherStore = new OtherStore(this);
    this.teamStore = new TeamStore(this);
    this.invitesStore = new InvitesStore(this);
  }
}
