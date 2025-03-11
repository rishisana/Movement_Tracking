import { Athlete } from "./athlete";

export interface Team{
    id?: string,
    team_name: string,
    athletes: Athlete[]
}