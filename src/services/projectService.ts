import $api from '../http';
import { AxiosResponse } from 'axios';
import { ITrack } from '../models/ITrack';
import { ICase } from '../models/ICase';
import { IProject } from '../models/IProject';

interface IDataGetCases {
  trackId: number | null;
}

interface IDataGetProjects {
  userId: number | null;
}

export default class ProjectService {
  static getAllTracks(): Promise<AxiosResponse<ITrack[]>> {
    return $api.get<ITrack[]>('tracks/getAll');
  }

  static getCasesByTrackId(
    data: IDataGetCases,
  ): Promise<AxiosResponse<ICase[]>> {
    return $api.post<ICase[]>('cases/getCasesByTrackId', data);
  }

  static getProjectsByUserId(
    data: IDataGetProjects,
  ): Promise<AxiosResponse<IProject[]>> {
    return $api.post<IProject[]>('projects/getProjectsByUserId', data);
  }

  static async createProject(data: IProject): Promise<AxiosResponse<IProject>> {
    return $api.post<IProject>('projects/create', data);
  }
}
