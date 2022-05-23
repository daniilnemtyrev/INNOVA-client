import { AxiosResponse } from 'axios';
import $api from '../http';
import { ITeam } from '../models/ITeam';
import { CreateTeam } from '../stores/team-store';

export default class TeamService {
  // static getAllTracks(): Promise<AxiosResponse<IResponseGetAllTracks>> {
  //   return $api.get<IResponseGetAllTracks>('tracks/getAllTracks');
  // }

  // static getCasesByTrackId(
  //   data: IDataGetCases,
  // ): Promise<AxiosResponse<ICase[]>> {
  //   return $api.post<ICase[]>('cases/getCasesByTrackId', data);
  // }

  // static getProjectsByUserId(
  //   data: IDataGetProjects,
  // ): Promise<AxiosResponse<IProject[]>> {
  //   return $api.post<IProject[]>('projects/getProjectsByUserId', data);
  // }

  static async createTeam(data: CreateTeam): Promise<AxiosResponse<ITeam>> {
    return $api.post<ITeam>('teams/create', data);
  }
}
