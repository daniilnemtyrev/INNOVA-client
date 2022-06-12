import { IInvite } from './IInvite';

export interface IUser {
  id: number | null;
  imagePath: string;
  email?: string;
  surname: string;
  name: string;
  patronymic: string;
  post_status: string;
  request_status?: string;
  place_of_work_stud: string;
  birthdate: string;
  phone: string;
  move_to: string;
  move_from: string;
  password?: string;
  roles?: [
    {
      id: number | null;
      value: string;
      description: string;
    },
  ];
  teamId: number | null;
  projectId: number | null;
  team: {
    name: string;
  } | null;
  project: {
    name: string;
  } | null;
  invites: IInvite[];
}
