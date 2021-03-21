// https://forkify-api.herokuapp.com/v2 (API for getting Recipes)
const recipeContainer = document.querySelector('.recipe_infoContainer');
console.log(recipeContainer);

const loadingSpinner = function (mainBody) {
    const spinner = `
    <div class='spinner'>
    <img src='Images/loading.png' alt='Spinner Image not Found' class='spinnerRoll'>; 
    </div>`;
    mainBody.innerHTML = '';
    mainBody.insertAdjacentHTML('afterbegin', spinner);
}

const allRecipes = async () => {
    loadingSpinner(recipeContainer);
    const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc08');
    const data = await res.json();
    let recipeData = data.data.recipe;
    const htmlData = `
                    <div class='item_image'>
                        <img src='${recipeData.image_url}'>
                    </div>
                    <div class='itemName'>
                        <h2>${recipeData.title}</h2>
                    </div>
                    <div class='item_recipeInfo'>
                        <div class='cookingTime'>
                            <div class='clockImage'>
                                <img src='Images/clock.svg'>
                            </div>
                            <div class='timeTaken'>
                                <h3>${recipeData.cooking_time} Minutes</h3>
                            </div>
                        </div>
                        <div class='peopleQuantity'>
                            <div class="peopleImage">
                                <img src='Images/people.png'>
                            </div>
                            <div class="quantity">
                                <h3>${recipeData.servings} People</h3>
                            </div>
                        </div>
                        <div>
                            <img src='Images/add.png' style='width: 25px; height: 25px; margin-top: 45px;'>
                        </div>
                        <div>
                            <img src='Images/minus.png'
                                style='width: 25px; height: 25px; margin-top: 45px;margin-left: 20px;'>
                        </div>
                    </div>
                    <div class='item_ingredients'>
                        <h2>RECIPE INGREDIENTS</h2>
                        <ul>
                        ${recipeData.ingredients.map((ing) => {
        return `<li>
            <div>
                <img src='Images/checked.png' style='width: 15px; height: 15px; margin-top: 3px;'>
                                </div>
                <div>
                    <h3 style='margin-left: 5px;'>${ing.quantity} ${ing.unit} / ${ing.description}
                                    </h3>
                </div>
                            </li>`
    }).join('')}
                            
                        </ul>
                    </div >
    <div class='item_originalSource'>
        <h2>HOW TO COOK IT</h2>
        <div>
            <pre>This recipe was carefully designed and tested by <span style='font-weight: bold;'>${recipeData.publisher}</span>
Please check out directions at their website.</pre>
        </div>
        <button class='originalSite'>Website</button>
    </div>`;

    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', htmlData);
}

allRecipes();