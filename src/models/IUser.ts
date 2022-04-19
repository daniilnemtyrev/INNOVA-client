export interface IUser {
  roles?: any;
  id: number | null;
  email?: string;
  surname: string;
  name: string;
  patronymic: string;
  post_status: string;
<<<<<<< HEAD
  request_status: string,
=======
  request_status?: string;
>>>>>>> dfd21a707a99805bfca56d2695eb3324c5036a0b
  place_of_work_stud: string;
  birthdate: string;
  phone: string;
  move_to: string;
  move_from: string;
  password?: string;
}
