export interface Movie {
  id: number;
  title: string;
  review: string;
}

export interface MovieFormType {
  title: string;
  review: string;
}

export interface MovieEditFormType {
  id: number | null;
  title: string;
  review: string;
}
