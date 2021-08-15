import { API_URL } from '../config.js';
import { getJsonData } from "../helper.js";

export const motherSpecial = {
    recipe: {},
    searchedItem: {
        results: [],
        pageNumber: 1,
        NoOfItemsDisplayed: 10,
    },
    bookmarks: [],
}

export const loadRecipe = async function (id) { //loading the recipe
    try {
        const data = await getJsonData(`${API_URL}/${id}`);
        motherSpecial.recipe = data.data.recipe;
        if (motherSpecial.bookmarks.some(bookmark => bookmark.id === id))
            motherSpecial.recipe.bookmarked = true;
        else
            motherSpecial.recipe.bookmarked = false;
    }
    catch (err) {
        throw (`We are unable to process your request at this time. ${err} Try searching for a new recipe. `);
    }
}

export const loadSearchResult = async function (item) { // determine the data from the API
    try {
        const data = await getJsonData(`${API_URL}?search=${item}`);
        motherSpecial.searchedItem.results = data.data.recipes;
        motherSpecial.searchedItem.pageNumber = 1;
    }

    catch (err) {
        alert(err);
        throw err;
    }
}
export const searchedDataAccordingToPage = function (page) {  //Pagination function
    motherSpecial.searchedItem.pageNumber = page;
    const start = (page - 1) * 10;
    const end = page * 10;
    return motherSpecial.searchedItem.results.slice(start, end);
}

export const updateServingsData = function (newData) { // function to update quantity of ingredients
    motherSpecial.recipe.ingredients.forEach(ing => {
        ing.quantity = +(ing.quantity * newData / motherSpecial.recipe.servings);
    });
    if (newData > 0) // change the value only if the serving is either 1 or more than one.
        motherSpecial.recipe.servings = +newData;
}

export const deleteBookmark = function (id) {
    const index = motherSpecial.bookmarks.findIndex(el => el.id === id)
    motherSpecial.bookmarks.splice(index, 1);
    // console.log(motherSpecial.bookmarks);
    if (id === motherSpecial.recipe.id)
        motherSpecial.recipe.bookmarked = false;
}

export const addBookmark = function (recipe) {
    motherSpecial.bookmarks.push(recipe);
    // console.log(motherSpecial.bookmarks);
    if (recipe.id == motherSpecial.recipe.id)
        motherSpecial.recipe.bookmarked = true;
}

