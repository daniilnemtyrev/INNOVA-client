export interface IProject {
  id?: number | null;
  userId: number | null;
  trackId: number | null;
  trackName: string;
  trackDescription: string;
  caseId: number | null;
  caseName: string;
  caseDescription: string;
  name: string;
  description: string;
  auditorium: string;
  prototype: string;
  economy: string;
  marketing: string;
}
