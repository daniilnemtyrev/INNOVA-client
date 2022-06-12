import { AxiosResponse } from 'axios';
import $api from '../http';
import { ITrack } from '../models/ITrack';
import { ICase } from '../models/ICase';
import { IProject } from '../models/IProject';
import { Task } from '../models/task';

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
    return $api.get<IResponseGetAllTracks>('tracks');
  }

  static getCasesByTrackId(
    data: IDataGetCases,
  ): Promise<AxiosResponse<ICase[]>> {
    return $api.post<ICase[]>('cases/getCasesByTrackId', data);
  }

  static getProjectsByTeamId(
    data: IDataGetProjects,
  ): Promise<AxiosResponse<IProject>> {
    return $api.post('projects/myProject', data);
  }

  static async createProject(data: IProject): Promise<AxiosResponse<IProject>> {
    return $api.post<IProject>('projects/create', data);
  }

  static async getTasksByProjectId(
    data: number | null,
  ): Promise<AxiosResponse<Task[]>> {
    return $api.get(`tasks/${data}`);
  }

  static async deleteTask(data: number | null){
    return $api.delete(`tasks/${data}`);
  }

  static async createTask(data: Task){
    return $api.post<Task>(`tasks/createTask`, data);
  }

  static async setProject(data) {
    return $api.post(`projects/update`, data);
  }
}
