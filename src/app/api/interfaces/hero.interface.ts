export interface Hero {
    id:          number;
    name:        string;
    slug:        string;
    powerstats:  Powerstats;
    appearance:  Appearance;
    biography:   Biography;
    work:        Work;
    connections: Connections;
    images:      Images;
}

export interface Appearance {
    gender:    Gender;
    race:      null | string;
    height:    string[];
    weight:    string[];
    eyeColor:  string;
    hairColor: string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}

export interface Biography {
    fullName:        string;
    alterEgos:       AlterEgos;
    aliases:         string[];
    placeOfBirth:    string;
    firstAppearance: string;
    publisher:       Publisher;
    alignment:       Alignment;
}

export enum Alignment {
    Bad = "bad",
}

export enum AlterEgos {
    NoAlterEgosFound = "No alter egos found.",
}

export enum Publisher {
    DCComics = "DC Comics",
    IconComics = "Icon Comics",
    MarvelComics = "Marvel Comics",
}

export interface Connections {
    groupAffiliation: string;
    relatives:        string;
}

export interface Images {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}

export interface Powerstats {
    intelligence: number;
    strength:     number;
    speed:        number;
    durability:   number;
    power:        number;
    combat:       number;
}

export interface Work {
    occupation: string;
    base:       string;
}
