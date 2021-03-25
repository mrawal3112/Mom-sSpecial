import views from './views.js';

class searchResult extends views {
    _recipeContainer = document.querySelector('.items');
    _generatehtmlData() {
        return this._recipeData.map(function (items) {
            return `
        <div class='itemBox'>
                    <div class='itemImage'>
                        <img src='${items.image_url}'>
                    </div>
                    <div class='itemData'>
                        <a href='#${items.id}'><h4>${items.title}</h4></a>
                        <h6>${items.publisher}</h6>
                    </div>
                </div>
            `
        }).join('');
    }
    _paginationBox() {
        return `
        <div class='pagination'>
                        <div>
                            <button class='previousPage'><a href='#'>Page 0 </a><i
                                    class='fa fa-arrow-left'></i></button>
                        </div>
                        <div>
                            <button class='nextPage'><a href='#'>Page 2 </a><i class='fa fa-arrow-right'></i></button>
                        </div>
                    </div> `;
    }
    displayData() {
        const pagination = this._paginationBox();
        this._recipeContainer.insertAdjacentHTML('beforeend', pagination);
    }

}

export default new searchResult();