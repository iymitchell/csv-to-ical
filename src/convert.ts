import * as fs from 'fs';
import * as fastCsv from 'fast-csv';
import { createEvents } from 'ics';
import yargs, { Arguments } from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).argv as Arguments;
const csvfile = argv.csvfile;
const icalfile = argv.icalfile;

interface CsvEvent {
  Subject: string;
  'Start Date': string;
  'Start Time': string;
  'End Date': string;
  'End Time': string;
  'All Day Event': string;
  Description: string;
  Location: string;
  Private: string;
}
// initialize the csv stream and parse the headers to be used as to populate the event object.
// @ts-ignore
const csvStream = fastCsv.parse<CsvEvent>({ headers: true });
const events: Parameters<typeof createEvents>[0] = [];

// starting after the header, parse the csv file and populate the events array.
// @ts-ignore
fs.createReadStream(csvfile)
  .pipe(csvStream)
  .on('data', (data: CsvEvent) => {
    const startDate = new Date(`${data['Start Date']} ${data['Start Time']}`);
    const endDate = new Date(`${data['End Date']} ${data['End Time']}`);

    events.push({
      start: [startDate.getFullYear(), startDate.getMonth() + 1, startDate.getDate(), startDate.getHours(), startDate.getMinutes()],
      end: [endDate.getFullYear(), endDate.getMonth() + 1, endDate.getDate(), endDate.getHours(), endDate.getMinutes()],
      title: data.Subject,
      description: data.Description,
      location: data.Location,
      status: 'CONFIRMED',
      startOutputType: 'local',
      endOutputType: 'local',
    });
  })
  .on('end', () => {
    const { error, value } = createEvents(events);
    if (error) {
      console.log(error);
    } else {
      // @ts-ignore
      fs.writeFileSync(icalfile, value);
    }
  });