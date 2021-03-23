export const motherSpecial = {
    recipe: {},
}

export const loadRecipe = async function (id) {
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
    const data = await res.json();
    motherSpecial.recipe = data.data.recipe;
}