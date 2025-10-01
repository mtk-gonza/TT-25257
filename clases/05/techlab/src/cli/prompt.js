import { createInterface } from 'readline';

export const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

export const ask = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer.trim());
        });
    });
};