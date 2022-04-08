export interface Message {
  userId: number | null;
  name: string;
  text: string;
}

export interface Payload {
  name: string;
  text: string;
}
