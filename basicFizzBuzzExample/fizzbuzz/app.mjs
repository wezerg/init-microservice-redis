import { createClient } from 'redis';
import * as fs from 'fs';

const client = createClient({url: 'redis://redis'});
client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

while (true) {
    const fileName = await client.brPop("filesname", 2);
    if (fileName?.element) {
        fs.readFile(`/files/${fileName.element}`, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            fizzBuzz(data);
        });
    }
}

function fizzBuzz(number){
    const num = parseInt(number);
    if (!isNaN(num)) {
        if (num === 0) {
            console.log(num);
        }
        else if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if(num % 3 === 0){
            console.log("Fizz");
        }
        else if(num % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(num);
        }
    }
}