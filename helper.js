// Here we will write the cidefor the function which will be repeated through out the project many times

export const getJsonData = async function (url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    }
    catch (err) {
        throw (err);
    }
}
