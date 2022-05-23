import { AxiosResponse } from 'axios';
import $api from '../http';
import { ITrack } from '../models/ITrack';
import { ICase } from '../models/ICase';
import { IProject } from '../models/IProject';

interface IDataGetCases {
  id: number | null;
}

interface IDataGetProjects {
  id: number | null;
}

interface IResponseGetAllTracks {
  data: ITrack[];
  total: number;
}

export default class ProjectService {
  static getAllTracks(): Promise<AxiosResponse<IResponseGetAllTracks>> {
    return $api.get<IResponseGetAllTracks>('tracks/getAllTracks');
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
