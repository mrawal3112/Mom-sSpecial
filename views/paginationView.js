import views from './views.js';

class paginationView extends views {
    _recipeContainer = document.querySelector('.pagination');
    _generatehtmlData() {
        const noOfPages = Math.ceil(this._recipeData.results.length / this._recipeData.NoOfItemsDisplayed);
        if (this._recipeData.pageNumber === 1 && noOfPages > 1) {
            return `<div>
            <button class='nextPage'><a href='#'>Page 2 </a><i class='fa fa-arrow-right'></i></button>
        </div>`;
        }
        if (this._recipeData.pageNumber !== 1 && this._recipeData.pageNumber < noOfPages) {
            return `<div>
            <button class='previousPage'><a href='#'>Page 1 </a><i
                    class='fa fa-arrow-left'></i></button>
        </div>
        <div>
            <button class='nextPage'><a href='#'>Page 2 </a><i class='fa fa-arrow-right'></i></button>
        </div>`;
        }
        if (this._recipeData.pageNumber === noOfPages) {
            return `<div>
            <button class='previousPage'><a href='#'>Page 5 </a><i
                    class='fa fa-arrow-left'></i></button>
        </div>`;
        }
        else {
            return ``;
        }
    }
}

export default new paginationView();
