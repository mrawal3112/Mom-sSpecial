// https://forkify-api.herokuapp.com/v2 (API for getting Recipes)

import * as model from '../model.js';
import recipeView from '../../views/recipeView.js';


const loadingSpinner = function (mainBody) {
    const spinner = `
    <div class='spinner'>
    <img src='Images/loading.png' alt='Spinner Image not Found' class='spinnerRoll'>; 
    </div>`;
    mainBody.innerHTML = '';
    mainBody.insertAdjacentHTML('afterbegin', spinner);
}

const allRecipes = async () => {
    // loadingSpinner(recipeContainer);

    let urlData = window.location.hash; // it will get the hash id from the url
    let recipeID = urlData.slice(1); // remove the hash (first value from hash id)
    if (!recipeID) return; // if we there is no id then just return

    await model.loadRecipe(recipeID); // async function is loaded so await is required
    let recipeData = model.motherSpecial.recipe;

    recipeView.render(recipeData); // this will create a function in recipeView.js file that will accept the data for display

}

allRecipes();

window.addEventListener('hashchange', allRecipes);
// Whenever we click on the recipe the hash code will get chnaged and it will load the data coresponding to that recipe