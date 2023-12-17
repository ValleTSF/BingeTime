// TV SHOW

export interface Tvshow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: Date;
  ended: null;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: null;
  dvdCountry: null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: TvshowLinks;
  _embedded: Embedded;
}

export interface Embedded {
  episodes: Episode[];
}

export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: Type;
  airdate: Date;
  airtime: Time;
  airstamp: Date;
  runtime: number;
  rating: Rating;
  image: Image;
  summary: string;
  _links: EpisodeLinks;
}

export interface EpisodeLinks {
  self: Previousepisode;
  show: Previousepisode;
}

export interface Previousepisode {
  href: string;
}

export enum Time {
  The2200 = "22:00",
  The2230 = "22:30",
  The2300 = "23:00",
}

export interface Image {
  medium: string;
  original: string;
}

export interface Rating {
  average: number;
}

export enum Type {
  Regular = "regular",
}

export interface TvshowLinks {
  self: Previousepisode;
  previousepisode: Previousepisode;
}

export interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: null;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Schedule {
  time: Time;
  days: string[];
}

// CAST MEMBER

export interface CastMember {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}

export interface Character {
  id: number;
  url: string;
  name: string;
  image: Image | null;
  _links: Links;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Person {
  id: number;
  url: string;
  name: string;
  country: Country | null;
  birthday: Date | null;
  deathday: null;
  gender: string;
  image: Image;
  updated: number;
  _links: Links;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}
