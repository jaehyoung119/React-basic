export interface Movie {
  id: number;
  title: string;
  review: string;
}

export interface MovieFormState {
  title: string;
  review: string;
}

export interface MovieEditFormState {
  id: number | null;
  title: string;
  review: string;
}
