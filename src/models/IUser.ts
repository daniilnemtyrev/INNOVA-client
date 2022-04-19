export interface IUser {
  roles?: any;
  id: number | null;
  email?: string;
  surname: string;
  name: string;
  patronymic: string;
  post_status: string;
  request_status: string,
  place_of_work_stud: string;
  birthdate: string;
  phone: string;
  move_to: string;
  move_from: string;
  password?: string;
}
