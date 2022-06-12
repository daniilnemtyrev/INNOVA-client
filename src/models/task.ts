export interface Task {
  id?: number | null;
  userId: number | null;
  projectId: number | null;
  description?: string;
}
