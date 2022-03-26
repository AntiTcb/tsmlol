import { writable } from "svelte/store";
import copypastas from "../../static/tsm.json";

let lastMsg;

const randomIndex = () => Math.floor(Math.random() * copypastas.length);
const randomMsg = () => copypastas[randomIndex()];

export const getRandomCopypasta = () => {
    if (!lastMsg)
        lastMsg = randomMsg();
    else {
        let newMsg;
        do
        {
            newMsg = randomMsg();
        }
        while (lastMsg === newMsg)

        lastMsg = newMsg;
    }

    copypasta.set(lastMsg);
}

export const copypasta = writable("");
