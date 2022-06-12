/* eslint-disable class-methods-use-this */
import { makeAutoObservable, runInAction } from 'mobx';
import { ITeam } from '../models/ITeam';
import TeamService from '../services/team-service';

export interface CreateTeam {
  name: string;
  userId: number | null;
}

export interface GetUserTeam {
  id: number;
}

export interface IUserCard {
  id: number;
  name: string;
  surname: string;
}

const initialValues: ITeam = {
  id: null,
  name: '',
  creatorId: null,
  users: [],
  project: {
    id: null,
    name: '',
  },
};

export default class TeamStore {
  rootStore;

  team = initialValues;

  constructor(rootStore: any) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  setTeam(team: ITeam) {
    this.team = team;
  }

  async createTeam(data: CreateTeam) {
    try {
      const response = await TeamService.createTeam(data);

      runInAction(() => {
        this.setTeam(response.data);
        this.rootStore.userStore.user.teamId = this.team.id;
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getUserTeam(teamId: number) {
    const data: GetUserTeam = {
      id: teamId,
    };
    try {
      const response = await TeamService.getUserTeam(data);

      runInAction(() => {
        this.setTeam(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

}
