import { makeAutoObservable, runInAction } from 'mobx';
import { ICase } from '../models/ICase';
import { IProject } from '../models/IProject';
import { ITrack } from '../models/ITrack';
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
};

export default class ProjectStore {
  rootStore;

  project: IProject = initialValuesProject;

  myProjects: IProject[] = [];

  tracks: ITrack[] = [];

  cases: ICase[] = [];

  isLoading = false;

  constructor(rootStore: any) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  setProject(project: IProject) {
    this.project = project;
  }

  setProjects(myProjects: IProject[]) {
    this.myProjects = myProjects;
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
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getAllTracks() {
    try {
      const response = await ProjectService.getAllTracks();
      runInAction(() => {
        this.setTracks(response.data);
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async getCasesByTrackId(trackId: number | null) {
    const data = {
      trackId,
    };
    try {
      const response = await ProjectService.getCasesByTrackId(data);
      console.log(response.data);

      runInAction(() => {
        this.setCases(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getProjectsByUserId(userId: number | null) {
    const data = {
      id: userId,
    };
    try {
      const response = await ProjectService.getProjectsByUserId(data);
      console.log(response.data);

      runInAction(() => {
        this.setProjects(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }
}
