import { createClient } from 'redis';

const client = createClient({url: 'redis://redis'});
client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

while (true) {
    const data = await client.brPop("command", 5);
    if (data.element) {
        await client.lPush('sending', data.element);
        console.log(`J'ai rangé la commande n°${data.element}`);
    }    
}