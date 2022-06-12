/* eslint-disable class-methods-use-this */
import { makeAutoObservable, runInAction } from 'mobx';
import { ICase } from '../models/ICase';
import { IProject } from '../models/IProject';
import { ITrack } from '../models/ITrack';
import { Task } from '../models/task';
import ProjectService from '../services/projectService';

const initialValuesProject: IProject = {
  id: null,
  userId: null,
  trackId: null,
  trackName: '',
  trackDescription: '',
  caseId: null,
  caseName: '',
  caseDescription: '',
  name: '',
  description: '',
  auditorium: '',
  prototype: '',
  economy: '',
  marketing: '',
  teamId: null,
};

export default class ProjectStore {
  rootStore;

  project: IProject = initialValuesProject;

  myProject: IProject = {} as IProject;

  tracks: ITrack[] = [];

  cases: ICase[] = [];

  isLoading = false;

  tasks: Task[] = [];

  constructor(rootStore: any) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  setProject(project: IProject) {
    this.project = project;
  }

  setTasks(tasks: Task[]) {
    this.tasks = tasks;
  }

  setProjects(myProject: IProject) {
    this.myProject = myProject;
  }

  setTracks(tracks: ITrack[]) {
    this.tracks = tracks;
  }

  setCases(cases: ICase[]) {
    this.cases = cases;
  }

  setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  async createProject(data: IProject) {
    try {
      const response = await ProjectService.createProject(data);
      runInAction(() => {
        this.setProject(response.data);
        this.rootStore.userStore.user.projectId = this.project.id;
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getAllTracks() {
    try {
      const response = await ProjectService.getAllTracks();
      runInAction(() => {
        this.setTracks(response.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getCasesByTrackId(id: number | null) {
    const data = {
      id,
    };
    try {
      const response = await ProjectService.getCasesByTrackId(data);
      runInAction(() => {
        this.setCases(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getProjectsByTeamId(teamId: number | null) {
    const data = {
      id: teamId,
    };
    try {
      const response = await ProjectService.getProjectsByTeamId(data);

      runInAction(() => {
        this.setProjects(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  async setProjectId(data: any) {
    try {
      await ProjectService.setProject(data);
    } catch (err) {
      console.log(err);
    }
  }

  async getTasksByProjectId(projectId: number | null) {
    try {
      const response = await ProjectService.getTasksByProjectId(projectId);

      runInAction(() => {
        this.setTasks(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  async deleteTaskById(id: number | null | undefined) {
    try {
      await ProjectService.deleteTask(id);
      await this.getTasksByProjectId(this.rootStore.userStore.user.projectId);
    } catch (err) {
      console.log(err);
    }
  }

  async createTask(data: Task) {
    try {
      await ProjectService.createTask(data);
      await this.getTasksByProjectId(this.rootStore.userStore.user.projectId);
    } catch (err) {
      console.log(err);
    }
  }
}
