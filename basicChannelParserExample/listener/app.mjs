import { createClient } from 'redis';

const client = createClient({url: 'redis://redis'});
client.on('error', (err) => console.log('Redis Client Error', err));
const subscriber = client.duplicate();
subscriber.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();
await subscriber.connect();

await subscriber.subscribe('chat-room', async (message) => {
    await client.lPush('original', message);
});