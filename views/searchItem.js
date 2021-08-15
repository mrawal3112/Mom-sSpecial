class searchItem {
    #parentEl = document.querySelector('.searchBox');
    #searchBtn = document.querySelector('.searchBtn');
    getValue() { // function to get the user inputed value and pass it as a argument to the model query
        const searchedValue = this.#parentEl.querySelector('.searchField').value;
        this.#parentEl.querySelector('.searchField').value = '';
        return searchedValue;
    }
    listenEvent(ev) { // click event listner for search
        this.#searchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            ev();
        })
    }

}

export default new searchItem();