export interface IInvite {
  id?: number | null;
  invitedUserId: number | null;
  teamId: number | null;
  senderName: string;
}
