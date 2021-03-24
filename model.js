import { API_URL } from '../config.js';
import { getJsonData } from "../helper.js";

export const motherSpecial = {
    recipe: {},
    results: [],
}

export const loadRecipe = async function (id) {
    try {
        const data = await getJsonData(`${API_URL}/${id}`);
        motherSpecial.recipe = data.data.recipe;
    }
    catch (err) {
        throw (`We are unable to process your request at this time. ${err} Try searching for a new recipe. `);
    }
}

export const loadSearchResult = async function (item) { // detrmine the data from the API
    try {
        const data = await getJsonData(`${API_URL}?search=${item}`);
        motherSpecial.results = data.data.recipes;
    }
    catch (err) {
        alert(err);
        throw err;
    }
}