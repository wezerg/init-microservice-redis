import { createClient } from 'redis';

const client = createClient({url: 'redis://redis'});
client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();
await client.subscribe('chat-room', (message) => {
    console.log("Usine ", message);
});