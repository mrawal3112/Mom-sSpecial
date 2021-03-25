import views from './views.js';

class recipeView extends views {
    _recipeContainer = document.querySelector('.recipe_infoContainer');
    listenEvent(eventContainer) { //event Handler
        ['hashchange', 'load'].forEach(ev => {
            window.addEventListener(ev, eventContainer);
        });
    }

    _generatehtmlData() { // Recipe Container
        return `
                <div class='item_image'>
                    <img src='${this._recipeData.image_url}'>
                </div>
                <div class='itemName'>
                    <h3>${this._recipeData.title}</h3>
                </div>
                <div class='item_recipeInfo'>
                    <div class='cookingTime'>
                        <div class='clockImage'>
                            <img src='Images/clock.svg'>
                        </div>
                        <div class='timeTaken'>
                            <h3>${this._recipeData.cooking_time} Minutes</h3>
                        </div>
                    </div>
                    <div class='peopleQuantity'>
                        <div class="peopleImage">
                            <img src='Images/people.png'>
                        </div>
                        <div class="quantity">
                            <h3>${this._recipeData.servings} People</h3>
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
                    ${this._recipeData.ingredients.map((ing) => {
            return `<li>
                                <div>
                                <img src='Images/checked.png' style='width: 15px; height: 15px; margin-top: 3px;'>
                                </div>
                                <div>
                                    <h3 style='margin-left: 5px;'>${ing.quantity ? ing.quantity : ''} ${ing.unit}  ${ing.description}</h3>
                                </div >
                                </li > `}).join('')}
                    </ul>
                </div >
    <div class='item_originalSource'>
        <h2>HOW TO COOK IT</h2>
        <div>
            <pre>This recipe was carefully designed and tested by <span style='font-weight: bold;'>${this._recipeData.publisher}</span>
    Please check out directions at their website.</pre>
        </div>
        <button class='originalSite'><a href='${this._recipeData.source_url}' style='text-decoration:none;color:black;'>Website</a></button>
    </div>
    `;
    }
}

export default new recipeView();