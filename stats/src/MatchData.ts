import { MatchResult } from "./MatchResult"

// define tuple describing a data row of a match (date, home team, away team, home team score, away team score, match result, referee)
export type MatchData = [Date, string, string, number, number, MatchResult, string]