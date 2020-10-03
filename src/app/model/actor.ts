import { KnownFor } from './known-for';

export class Actor {
  constructor(
    public known_for_department:string,
     public name: string,
     public id: number,
     public profile_path: string,
     public known_for?:KnownFor[],
  ) {}
}
