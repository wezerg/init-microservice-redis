import { createClient } from 'redis';

const client = createClient({url: 'redis://redis'});
client.on('error', (err) => console.log('Redis Client Error', err));
let x = 0;
await client.connect();
setInterval(async () => {
    await client.lPush('command', `${x}`);
    console.log(`J'ai envoyé la commande n°${x++} !`);
}, 2000);