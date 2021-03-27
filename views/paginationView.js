import views from './views.js';

class paginationView extends views {
    _recipeContainer = document.querySelector('.pagination');
    _generatehtmlData() {
        const noOfPages = Math.ceil(this._recipeData.results.length / this._recipeData.NoOfItemsDisplayed);
        const pageNumber = this._recipeData.pageNumber;
        if (pageNumber === 1 && noOfPages > 1) {
            return `<div>
            <button data-pagenumber = ${pageNumber + 1} class='nextPage'>Page ${pageNumber + 1} <i class='fa fa-arrow-right'></i></button>
        </div>`;
        }
        console.log(pageNumber);
        console.log(noOfPages);
        console.log(this._recipeData.results.length);
        if (pageNumber === noOfPages) {
            return `<div>
        <button data-pagenumber = ${pageNumber - 1} class='previousPage'>Page ${pageNumber - 1} <i
                class='fa fa-arrow-left'></i></button>
            </div>`;
        }
        if (pageNumber !== 1 && this._recipeData.pageNumber < noOfPages) {
            return `<div>
            <button data-pagenumber = ${pageNumber - 1} class='previousPage'>Page ${pageNumber - 1} <i
                    class='fa fa-arrow-left'></i></button>
        </div>
        <div>
            <button data-pagenumber = ${pageNumber + 1} class='nextPage'>Page ${pageNumber + 1} <i class='fa fa-arrow-right'></i></button>
        </div>`;
        }
        else {
            return ``;
        }
    }

    listenClick(handler) {
        this._recipeContainer.addEventListener('click', function (e) {
            handler(+e.target.closest('button').dataset.pagenumber);
        })
    }
}

export default new paginationView();
