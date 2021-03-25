export default class view {
    _recipeData;
    render(data) { // render Function 
        if (!data || Array.isArray(data) && data.length === 0)
            return this.errorMessage('The item you are looking for is not available. Try again with some other item ');
        this._recipeData = data;
        this._recipeContainer.innerHTML = '';
        const htmlData = this._generatehtmlData();
        this._recipeContainer.insertAdjacentHTML('afterbegin', htmlData);
    }

    showSpinner() { // Spinner Class 
        const spinner = `
    <div class='spinner'>
    <img src='Images/loading.png' alt='Spinner Image not Found' class='spinnerRoll'>; 
    </div>`;
        this._recipeContainer.innerHTML = '';
        this._recipeContainer.insertAdjacentHTML('afterbegin', spinner);
    }

    errorMessage(errr) { //displaying Error Message
        const message = `<div class='errorMessage'>
            <div class='errorImage'>
                <img src='Images/cancel.png' alt="Couldn't find the picture" class='errorImage'>
                        </div>
                <div class='message'>
                    <p>${errr}</p>
                </div>
            </div>`;
        this._recipeContainer.innerHTML = '';
        this._recipeContainer.insertAdjacentHTML('afterbegin', message);
    }

}