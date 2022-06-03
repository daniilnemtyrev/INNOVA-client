import { AxiosResponse } from 'axios';
import $api from '../http';
import { IInvite } from '../models/IInvite';

export type AcceptInvite = {
  id?: number | null;
  teamId: number | null;
  userId: number | null;
};

export type CancelInvite = {
  id?: number | null;
};

export type GetInvites = {
  invitedUserId?: number | null;
};

export default class InviteService {
  static sendInviteToTeam(data: IInvite): Promise<AxiosResponse<string>> {
    return $api.post<string>('invite/sendInviteToTeam', data);
  }

  static acceptInvite(data: AcceptInvite): Promise<AxiosResponse<string>> {
    return $api.post<string>('invite/acceptInvite', data);
  }

  static cancelInvite(data: CancelInvite): Promise<AxiosResponse<string>> {
    return $api.post<string>('invite/cancelInvite', data);
  }

  static getInvites(data: GetInvites): Promise<AxiosResponse<IInvite[]>> {
    return $api.post<IInvite[]>('invite/getInvites', data);
  }
}
