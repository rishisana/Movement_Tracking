import { Team } from "./team";

export interface Input {
    id?: string,
    date: string,
    movement: string,
    team_name : string,
    athletes: [
        {
            athlete_name: string,
            assessment: number
        }
    ]
}