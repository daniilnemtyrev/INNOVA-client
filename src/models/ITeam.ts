import { IUserCard } from '../stores/team-store';

export interface ITeam {
  id: number | null;
  name: string;
  creatorId: number | null;
  users: IUserCard[];
  project: {
    id: number | null;
    name: string;
  };
}
