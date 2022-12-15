import { createClient } from 'redis';

const client = createClient({url: 'redis://redis'});
client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

while (true) {
    const data = await client.brPop("parsedA", 2);
    if (data?.element) {
        if (!/[Z,X,K]/.test(data.element)) {
            await client.lPush('final', data.element);
        }
    }
}