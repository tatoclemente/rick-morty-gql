

export type Info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

type Origin = {
  name: string;
}

export interface Character {
  id: number;
  name: string;
  image: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: Origin
}

