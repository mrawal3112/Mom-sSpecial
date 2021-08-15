import views from './views.js';
class bookmarkview extends views {
    _recipeContainer = document.querySelector('.bookmark_list_box');
    _generatehtmlData() {
        return this._recipeData.map(function (items) {
            return `
        <div class='itemBox'>
                    <div class='itemImage'>
                        <img src='${items.image_url}'>
                    </div>
                    <div class='itemData'>
                        <a href='#${items.id}'><h3>${items.title}</h3></a>
                        <h6>${items.publisher}</h6>
                    </div>
                </div>
            `
        }).join('');
    }
}

export default new bookmarkview();