import fs from 'fs';

export abstract class CsvFileReader<GenericData> {
    public data: GenericData[] = [];

    constructor(public filename: string) {}

    abstract mapRow(row: string[]): GenericData;

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((row: string) => {
                return row.split(',');
            })
            .map(this.mapRow);
    }
}