// Here we will write the cidefor the function which will be repeated through out the project many times
import { TIMEOUT_SEC } from "../config.js";


const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request Took longer then expected'))
        }, sec * 1000);
    });
}


export const getJsonData = async function (url) {
    try {
        const res = await fetch(url);
        const data = await Promise.race([res.json(), timeout(TIMEOUT_SEC)]);
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    }
    catch (err) {
        throw (err);
    }
}
