import { createClient } from 'redis';

const client = createClient({url: 'redis://redis'});
client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

while (true) {
    const data = await client.brPop("final", 2);
    if (data?.element) {
        console.log(`${data.element}`);
    }
}