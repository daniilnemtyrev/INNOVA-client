export interface Task {
  id?: number;
  userId: number | null;
  projectId: number | null;
  description?: string;
}
