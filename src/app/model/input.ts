import { Team } from "./team";

export interface Input {
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