export interface IEvent {
  id: number;
  name: string;
  date: Date;
  price: number;
  time: string;
  imageUrl: string;
  location?: {
    address: string;
    city: string;
    country: string;
  };
  onlineURL?: string;
  sessions: ISession[];
}

export interface ISession {
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: string[];
}
