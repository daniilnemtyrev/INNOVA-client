import { IUserCard } from '../stores/team-store';

export interface ITeam {
  id: number | null;
  name: string;
  users: IUserCard[];
}
