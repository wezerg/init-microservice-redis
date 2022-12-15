import { createClient } from 'redis';

const client = createClient({url: 'redis://redis'});
client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

while (true) {
    const data = await client.brPop("original", 2);
    if (data?.element) {
        data.element = data.element.replaceAll('a', '*').replaceAll('A', '*');
        await client.lPush('parsedA', data.element);
    }
}