import views from './views.js';

class bookmarkView extends views {
    _recipeContainer = document.querySelector('.bookmark__list');
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
}

export default new bookmarkView();