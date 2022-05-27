import { AxiosResponse } from 'axios';
import $api from '../http';
import { ITeam } from '../models/ITeam';
import { CreateTeam, GetUserTeam } from '../stores/team-store';

export default class TeamService {
  static async createTeam(data: CreateTeam): Promise<AxiosResponse<ITeam>> {
    return $api.post<ITeam>('teams/create', data);
  }

  static async getUserTeam(data: GetUserTeam): Promise<AxiosResponse<ITeam>> {
    return $api.post<ITeam>('teams/get', data);
  }
}
