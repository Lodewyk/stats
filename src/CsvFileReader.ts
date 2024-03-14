import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';

export class CsvFileReader {
    public data: string[][] = [];

    constructor(public filename: string) {}

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((row: string) => {
                return row.split(',');
            });

    }
}