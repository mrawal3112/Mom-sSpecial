import { API_URL } from '../config.js';
import { getJsonData } from "../helper.js";

export const motherSpecial = {
    recipe: {},
    searchedItem: {
        results: [],
        pageNumber: 1,
        NoOfItemsDisplayed: 10,
    }
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

export const loadSearchResult = async function (item) { // determine the data from the API
    try {
        const data = await getJsonData(`${API_URL}?search=${item}`);
        motherSpecial.searchedItem.results = data.data.recipes;
    }
    catch (err) {
        alert(err);
        throw err;
    }
}
export const searchedDataAccordingToPage = function (page) {
    const start = (page - 1) * 10;
    const end = page * 10;
    return motherSpecial.searchedItem.results.slice(start, end);
}