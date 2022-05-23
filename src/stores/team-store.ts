/* eslint-disable class-methods-use-this */
import { makeAutoObservable, runInAction } from 'mobx';
import { ITeam } from '../models/ITeam';
import TeamService from '../services/team-service';

export interface CreateTeam {
  name: string;
  userId: number | null;
}

const initialValues: ITeam = {
  id: null,
  name: '',
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
      console.log(response.data);

      runInAction(() => {
        this.setTeam(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  // async editUser(data: EditProfileInput) {
  //   const dataWithId = {
  //     ...data,

  //   };

  //   try {
  //     const response = await UserService.editUser(dataWithId);

  //     this.setUser(response.data);

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
}
