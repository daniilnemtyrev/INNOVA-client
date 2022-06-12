/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import { makeAutoObservable, runInAction } from 'mobx';
import { IInvite } from '../models/IInvite';
import InviteService, {
  AcceptInvite,
  CancelInvite,
  GetInvites,
} from '../services/invite-service';

export default class InvitesStore {
  rootStore;

  invites: IInvite[] = [];

  constructor(rootStore: any) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  async sendInviteToTeam(
    invitedUserId: number | null,
    teamId: number | null,
    senderName: string,
  ) {
    const data = {
      invitedUserId,
      teamId,
      senderName,
    };
    console.log(data);

    try {
      await InviteService.sendInviteToTeam(data);
    } catch (err) {
      console.log(err);
    }
  }

  async acceptInvite(data: AcceptInvite) {
    try {
      await InviteService.acceptInvite(data);
      runInAction(() => {
        this.rootStore.userStore.user.invites =
          this.rootStore.userStore.user.invites.filter(
            (invite: IInvite) => invite.id !== data.id,
          );

        this.invites = this.rootStore.userStore.user.invites.filter(
          (invite: IInvite) => invite.id !== data.id,
        );

        this.rootStore.userStore.user.teamId = data.teamId;
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getInvites(data: GetInvites) {
    try {
      const response = await InviteService.getInvites(data);
      console.log(response.data);

      runInAction(() => {
        this.rootStore.userStore.user.invites = response.data;
        this.invites = response.data;
      });
    } catch (err) {
      console.log(err);
    }
  }

  async cancelInvite(data: CancelInvite) {
    try {
      await InviteService.cancelInvite(data);
      runInAction(() => {
        this.rootStore.userStore.user.invites =
          this.rootStore.userStore.user.invites.filter(
            (invite: IInvite) => invite.id !== data.id,
          );
        this.invites = this.rootStore.userStore.user.invites.filter(
          (invite: IInvite) => invite.id !== data.id,
        );
      });
    } catch (err) {
      console.log(err);
    }
  }
}
