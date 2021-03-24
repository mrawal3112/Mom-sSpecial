// https://forkify-api.herokuapp.com/v2 (API for getting Recipes)

import * as model from '../model.js';
import recipeView from '../../views/recipeView.js';
import searchItem from '../../views/searchItem.js';
import searchedResults from '../../views/searchResult.js';

const allRecipes = async () => {
    try {

        let urlData = window.location.hash; // it will get the hash id from the url
        let recipeID = urlData.slice(1); // remove the hash (first value from hash id)
        if (!recipeID) return; // if we there is no id then just return

        recipeView.showSpinner(); // Load the Spinner in the recipeView
        await model.loadRecipe(recipeID); // async function is loaded so await is required

        let recipeData = model.motherSpecial.recipe;

        recipeView.render(recipeData); // this will create a function in recipeView.js file that will accept the data for display
    }
    catch (err) {
        recipeView.errorMessage(err);
    }
}


const controlSearchResults = async function () { // obtain all the values from the API for searched item
    try {

        const value = searchItem.getValue();
        if (!value) return;

        searchedResults.showSpinner();

        await model.loadSearchResult(value);

        searchedResults.render(model.motherSpecial.results);


    }

    catch (err) {
        console.log(err);
    }
}

controlSearchResults();
allRecipes();

const init = () => {
    recipeView.listenEvent(allRecipes);
    searchItem.listenEvent(controlSearchResults);
}
init();

// Whenever we click on the recipe the hash code will get chnaged and it will load the data coresponding to that recipe