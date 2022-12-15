import { createClient } from 'redis';
import * as fs from 'fs';

const client = createClient({url: 'redis://redis'});
client.on('error', (err) => console.log('Redis Client Error', err));

let x = 0;
await client.connect();

setInterval(() => {
    fs.writeFile(`/files/${x}.txt`, `${x}`, async (err) => {
        if (err) {
            console.error(err);
            return;
        }
        await client.lPush('filesname', `${x}.txt`);
        x++;
    });
}, 1000);