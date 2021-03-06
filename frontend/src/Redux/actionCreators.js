import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../Shared/baseUrl'
import history from './history';

//----------------------------------USER AUTH
export const fetchUsers = () => (dispatch) => {
    // dispatch(usersLoading(true));

    return fetch(baseUrl + "/reviews/user", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(users => dispatch(addUsers(users)))
        .catch(error => dispatch(usersFailed(error.message)));
}

export const addToken = (token) => ({
    type: ActionTypes.ADD_TOKEN,
    payload: token
});

export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
})

export const deleteUser = () => ({
    type: ActionTypes.DELETE_USER
})

export const addUsers = (users) => ({
    type: ActionTypes.ADD_USERS,
    payload: users
})

export const usersLoading = () => ({
    type: ActionTypes.USERS_LOADING
})

export const usersFailed = () => ({
        type: ActionTypes.USERS_FAILED
    })
    //----------------------------------USER AUTH
    //----------------------------------INGREDIENT
export const fetchIngredients = () => (dispatch) => {
    // dispatch(ingredientsLoading(true));

    return fetch(baseUrl + "/ingredients", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(ingredients => dispatch(addIngredients(ingredients)))
        .catch(error => dispatch(ingredientsFailed(error.message)));
}

export const ingredientsLoading = () => ({
    type: ActionTypes.INGREDIENTS_LOADING
});

export const ingredientsFailed = (errmess) => ({
    type: ActionTypes.INGREDIENTS_FAILED,
    payload: errmess
});

export const deleteIngredient = () => ({
    type: ActionTypes.DELETE_INGREDIENTS
});

export const addIngredients = (ingredients) => ({
    type: ActionTypes.ADD_INGREDIENTS,
    payload: ingredients
});

export const addIngredient = (ingredients) => ({
    type: ActionTypes.ADD_INGREDIENT,
    payload: ingredients
});

export const postIngredient = (name, type) => (dispatch) => {
    const newIngredient = {
        name: name,
        type: type
    }

    return fetch(baseUrl + '/ingredients', {
            method: 'POST',
            body: JSON.stringify(newIngredient),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.text())
        .then(response => dispatch(addIngredient(response)))
        .catch(error => {
            console.log('Post ingredient ', error.message)
            alert('Your ingredient could not be added.\nError: ' + error.message)
        });
};
//----------------------------------INGREDIENT
//----------------------------------NUTRITION
export const fetchNutrition = () => (dispatch) => {
    // dispatch(nutritionLoading(true));

    return fetch(baseUrl + "/nutrition", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(nutrition => dispatch(addNutritions(nutrition)))
        .catch(error => dispatch(nutritionFailed(error.message)));
}

export const nutritionLoading = () => ({
    type: ActionTypes.NUTRITION_LOADING
});

export const nutritionFailed = (errmess) => ({
    type: ActionTypes.NUTRITION_FAILED,
    payload: errmess
});

export const deleteNutrition = () => ({
    type: ActionTypes.DELETE_NUTRITION
});

export const addNutritions = (nutrition) => ({
    type: ActionTypes.ADD_NUTRITIONS,
    payload: nutrition
});

export const addNutrition = (nutrition) => ({
    type: ActionTypes.ADD_NUTRITION,
    payload: nutrition
});

export const postNutrition = (servingSize, calories, caloriesFat, totalFat, saturatedFat, transFat, polyFat, monoFat, cholesterol, sodium, potassium,
    totalCarbs, dietaryFiber, sugar, sugarAlcohol, addedSugar, protein, vitA, vitB6, vitB12, vitC, vitD, vitE, vitK, calcium, iron, magnesium, thiamine,
    biotin, pantoAcid, phosphorous, iodine, zinc, selenium, copper, manganese, chromium, molybdenum, chloride) => (dispatch) => {
    const newNutrition = {

        servingSize: servingSize,
        calories: calories,
        caloriesFat: caloriesFat,
        totalFat: totalFat,
        saturatedFat: saturatedFat,
        transFat: transFat,
        polyFat: polyFat,
        monoFat: monoFat,
        cholesterol: cholesterol,
        sodium: sodium,
        potassium: potassium,
        totalCarbs: totalCarbs,
        dietaryFiber: dietaryFiber,
        sugar: sugar,
        sugarAlcohol: sugarAlcohol,
        addedSugar: addedSugar,
        protein: protein,
        vitA: vitA,
        vitB6: vitB6,
        vitB12: vitB12,
        vitC: vitC,
        vitD: vitD,
        vitE: vitE,
        vitK: vitK,
        calcium: calcium,
        iron: iron,
        magnesium: magnesium,
        thiamine: thiamine,
        biotin: biotin,
        pantoAcid: pantoAcid,
        phosphorous: phosphorous,
        iodine: iodine,
        zinc: zinc,
        selenium: selenium,
        copper: copper,
        manganese: manganese,
        chromium: chromium,
        molybdenum: molybdenum,
        chloride: chloride
    }

    return fetch(baseUrl + '/nutrition', {
            method: 'POST',
            body: JSON.stringify(newNutrition),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.text())
        .then(response => dispatch(addNutrition(response)))
        .catch(error => {
            console.log('Post nutrition ', error.message)
            alert('Your nutrition could not be added.\nError: ' + error.message)
        });
};

export const fetchRecipeNutrition = () => (dispatch) => {
        return fetch(baseUrl + "/recipes/nutrition", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(nutrition => dispatch(addRecipeNutrition(nutrition)))
        .catch(error => dispatch(recipeNutritionFailed(error.message)));
}


export const postRecipeNutrition = (servingSize, calories, caloriesFat, totalFat, saturatedFat, transFat, polyFat, monoFat, cholesterol, sodium, potassium,
    totalCarbs, dietaryFiber, sugar, sugarAlcohol, addedSugar, protein, vitA, vitB6, vitB12, vitC, vitD, vitE, vitK, calcium, iron,
    magnesium, thiamine, biotin, pantoAcid, phosphorous, iodine, zinc, selenium, copper, manganese, chromium, molybdenum, chloride,
    recipeId) => (dispatch) => {
    const newRecipeNutrition = {

        servingSize: servingSize,
        calories: calories,
        caloriesFat: caloriesFat,
        totalFat: totalFat,
        saturatedFat: saturatedFat,
        transFat: transFat,
        polyFat: polyFat,
        monoFat: monoFat,
        cholesterol: cholesterol,
        sodium: sodium,
        potassium: potassium,
        totalCarbs: totalCarbs,
        dietaryFiber: dietaryFiber,
        sugar: sugar,
        sugarAlcohol: sugarAlcohol,
        addedSugar: addedSugar,
        protein: protein,
        vitA: vitA,
        vitB6: vitB6,
        vitB12: vitB12,
        vitC: vitC,
        vitD: vitD,
        vitE: vitE,
        vitK: vitK,
        calcium: calcium,
        iron: iron,
        magnesium: magnesium,
        thiamine: thiamine,
        biotin: biotin,
        pantoAcid: pantoAcid,
        phosphorous: phosphorous,
        iodine: iodine,
        zinc: zinc,
        selenium: selenium,
        copper: copper,
        manganese: manganese,
        chromium: chromium,
        molybdenum: molybdenum,
        chloride: chloride,
        recipeId: recipeId
    }

    return fetch(baseUrl + '/recipes/nutrition', {
            method: 'POST',
            body: JSON.stringify(newRecipeNutrition),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.text())
        .then(response => dispatch(addRecipeNutrition(response)))
        .catch(error => {
            console.log('Post recipe nutrition ', error.message)
            alert('Your recipe nutrition could not be added.\nError: ' + error.message)
        });
};

export const recipeNutritionLoading = () => ({
    type: ActionTypes.RECIPENUTRITION_LOADING
});

export const recipeNutritionFailed = (errmess) => ({
    type: ActionTypes.RECIPENUTRITION_FAILED,
    payload: errmess
});

export const deleteRecipeNutrition = () => ({
    type: ActionTypes.DELETE_RECIPENUTRITION
});

export const addRecipeNutrition = (nutrition) => ({
    type: ActionTypes.ADD_RECIPENUTRITION,
    payload: nutrition
});
//----------------------------------NUTRITION
//----------------------------------GROCERIES
export const fetchGrocery = (id) => (dispatch) => {
    // dispatch(groceriesLoading(true));

    return fetch(baseUrl + "/groceries/" + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(groceries => dispatch(addGroceries(groceries)))
        .catch(error => dispatch(groceriesFailed(error.message)));
}
export const fetchGroceryByIngredient = (id) => (dispatch) => {
    // dispatch(groceriesLoading(true));

    return fetch(baseUrl + "/groceries/ingredient" + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        // .then(groceries => dispatch(addGroceries(groceries)))
        .catch(error => dispatch(groceriesFailed(error.message)));
}

export const fetchGroceries = () => (dispatch) => {
    // dispatch(groceriesLoading(true));

    return fetch(baseUrl + "/groceries", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(groceries => dispatch(addGroceries(groceries)))
        .catch(error => dispatch(groceriesFailed(error.message)));
}

export const groceriesLoading = () => ({
    type: ActionTypes.GROCERIES_LOADING
});

export const groceriesFailed = (errmess) => ({
    type: ActionTypes.GROCERIES_FAILED,
    payload: errmess
});

export const deleteGroceries = (id) => (dispatch) => {

    return fetch(baseUrl + '/groceries/' + id, {
            method: 'DELETE'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.text())
        .then(id => dispatch(deleteGroceriesSuccess(id)))
        .catch(error => { throw (error) });
}

export const deleteCompletedGroceries = (id) => (dispatch) => {

    return fetch(baseUrl + '/groceries/completed/' + id, {
            method: 'DELETE'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.text())
        .then(id => dispatch(deleteGroceriesSuccess(id)))
        .catch(error => { throw (error) });
}

export const deleteGroceriesSuccess = (id) => ({
    type: ActionTypes.DELETE_GROCERIES,
    payload: id
})
export const postGroceries = (ingredientName,
    qty, user_id) => (dispatch) => {
    const newGrocery = {
        ingredient_name: ingredientName,
        qty: qty,
        userId: user_id
    }
    return fetch(baseUrl + '/groceries/' + user_id, {
            method: 'POST',
            body: JSON.stringify(newGrocery),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.text())
        // .then(() => dispatch(addGrocery(newGrocery)))
        .catch(error => {
            console.log('Adding grocery: ', error.message)
            alert('Your grocery could not be added.\nError: ' + error.message)
        });
};

export const addGroceries = (groceries) => ({
    type: ActionTypes.ADD_GROCERIES,
    payload: groceries
});

export const addGrocery = (groceries) => ({
    type: ActionTypes.ADD_GROCERY,
    payload: groceries
});

export const toggleGrocery = (list_id) => (dispatch) => {
    return fetch(baseUrl + '/groceries/' + list_id, {
            method: 'PUT'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then((id) => dispatch(toggleGrocerySuccess(id)))
        .catch(error => { throw (error) });
}

export const toggleFetchGrocery = (name, qty) => (dispatch) => {

    return fetch(baseUrl + '/groceries/' + name + '/' + qty, {
            method: 'PUT'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then((name, qty) => dispatch(toggleFetchGrocerySuccess(name, qty)))
        .catch(error => { throw (error) });
}

export const toggleGrocerySuccess = (id) => ({
    type: ActionTypes.TOGGLE_GROCERY,
    payload: id
})

export const toggleFetchGrocerySuccess = (name, qty) => ({
        type: ActionTypes.TOGGLE_FETCH_GROCERY,
        payload: {
            name: name,
            qty: qty
        }
    })

export const changeGroceryQuantity = (name, qty) => (dispatch) => {
    return fetch(baseUrl + '/groceries/' + name + '/qty/' + qty, {
            method: 'PUT'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(() => dispatch(changeQtySuccess(name, qty)))
        .catch(error => { throw (error) });
}

export const changeQtySuccess = (ingredient_name, qty) => ({
    type: ActionTypes.CHANGE_GROCERY_QTY,
    payload: {
        ingredient_name: ingredient_name,
        qty: qty
    }
})
    //----------------------------------GROCERIES
    //-------------------------------------RECIPE
export const postRecipe = (id, name, numSteps, image, notes, userId, type) => (dispatch) => {
    const newRecipe = {
        id: id,
        name: name,
        numSteps: numSteps,
        image: image,
        notes: notes,
        userId: userId,
        type: type
    }
    newRecipe.date = new Date().toISOString();

    return fetch(baseUrl + '/recipes', {
            method: 'POST',
            body: JSON.stringify(newRecipe),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.text())
        .then(response => dispatch(addRecipe(response)))
        .catch(error => {
            console.log('Author recipe ', error.message)
            alert('Your recipe could not be published.\nError: ' + error.message)
        });
};

export const fetchRecipe = () => (dispatch) => {
    // dispatch(recipeLoading(true));

    return fetch(baseUrl + "/recipes", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(recipe => dispatch(addRecipe(recipe)))
        .catch(error => dispatch(recipeFailed(error.message)));
}

export const searchRecipe = (searchbar) => (dispatch) => {
    // dispatch(recipeLoading(true));

    return fetch(baseUrl + "/recipes/search/" + searchbar, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(recipeSearch => dispatch(foundRecipe(recipeSearch)))
        .catch(error => dispatch(recipeFailed(error.message)));
}

export const foundRecipe = (recipeSearch) => ({
    type: ActionTypes.SEARCH_RECIPE,
    payload: recipeSearch
});

export const recipeLoading = (status) => ({
    type: ActionTypes.RECIPE_LOADING,
    payload: status
});

export const recipeFailed = (errmess) => ({
    type: ActionTypes.RECIPE_FAILED,
    payload: errmess
});

export const editRecipe = (id, name, numSteps, image, notes, userId, type) => (dispatch) => {
    const updatedRecipe = {
        name: name,
        numSteps: numSteps,
        image: image,
        notes: notes,
        userId: userId,
        type: type
    }
    return fetch(baseUrl + '/edit/recipes/' + id, {
            method: 'PUT',
            body: JSON.stringify(updatedRecipe),
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(id => dispatch(editRecipeSuccess(id)))
        .catch(error => { throw (error) });
}

export const editRecipeSuccess = (id) => ({
    type: ActionTypes.EDIT_RECIPE,
    payload: id
})


export const deleteRecipe = (id) => (dispatch) => {

    return fetch(baseUrl + '/recipes/' + id, {
            method: 'DELETE'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(id => dispatch(deleteRecipeSuccess(id)))
        .catch(error => { throw (error) });
}

export const deleteRecipeSuccess = (id) => ({
    type: ActionTypes.DELETE_RECIPE,
    payload: id
})

export const addRecipe = (recipe) => ({
    type: ActionTypes.ADD_RECIPE,
    payload: recipe
});
//-------------------------------------RECIPE
//-------------------------------------RECIPEINGREDIENTS
export const postRecipeIngredients = (recipeId, ingredientId, ingredient_name, measurement, unit) => (dispatch) => {
    const newRecipeIngredient = {
        recipeId: recipeId,
        ingredientId: ingredientId,
        ingredient_name: ingredient_name,
        measurement: measurement,
        unit: unit
    }

    return fetch(baseUrl + '/recipes/ingredients', {
            method: 'POST',
            body: JSON.stringify(newRecipeIngredient),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.text())
        .then(() => dispatch(addRecipeIngredient(newRecipeIngredient)))
        .catch(error => {
            console.log('Recipe ingredients ', error.message)
            alert('Your recipe ingredients could not be published.\nError: ' + error.message)
        });
};

export const editRecipeIngredients = (recipeId, ingredientId, ingredient_name, measurement, unit,
    ingredientKey) => (dispatch) => {
    const updatedRecipeIngredients = {
        ingredientId: ingredientId,
        ingredient_name: ingredient_name,
        measurement: measurement,
        unit: unit
    }
    return fetch(baseUrl + '/recipes/ingredients/' + ingredientKey, {
            method: 'PUT',
            body: JSON.stringify(updatedRecipeIngredients),
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(recipeId => dispatch(editRecipeIngredientsSuccess(recipeId)))
        .catch(error => { throw (error) });
}

export const editRecipeIngredientsSuccess = (recipeId) => ({
    type: ActionTypes.EDIT_RECIPEINGREDIENTS,
    payload: recipeId
})

export const fetchRecipeIngredients = () => (dispatch) => {
    // dispatch(recipeIngredientsLoading(true));

    return fetch(baseUrl + "/recipes/ingredients", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(ingredients => dispatch(addRecipeIngredients(ingredients)))
        .catch(error => dispatch(recipeIngredientsFailed(error.message)));
}

export const recipeIngredientsLoading = (status) => ({
    type: ActionTypes.RECIPEINGREDIENTS_LOADING,
    payload: status
});

export const recipeIngredientsFailed = (errmess) => ({
    type: ActionTypes.RECIPEINGREDIENTS_FAILED,
    payload: errmess
});

export const deleteRecipeIngredients = (id) => (dispatch) => {

    return fetch(baseUrl + '/recipes/ingredients/' + id, {
            method: 'DELETE'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.text())
        .then(() => dispatch(deleteRecipeIngredientsSuccess(id)))
        .catch(error => { throw (error) });
}


export const deleteRecipeIngredientsSuccess = (id) => ({
    type: ActionTypes.DELETE_RECIPEINGREDIENTS,
    payload: id
});

export const addRecipeIngredients = (ingredients) => ({
    type: ActionTypes.ADD_RECIPEINGREDIENTS,
    payload: ingredients
});

export const addRecipeIngredient = (ingredients) => ({
    type: ActionTypes.ADD_RECIPEINGREDIENT,
    payload: ingredients
});

//-------------------------------------RECIPEINGREDIENTS
//-------------------------------------RECIPESTEPS
export const postRecipeSteps = (recipeId, stepNum, steps) => (dispatch) => {
    const newRecipe = {
        recipeId: recipeId,
        stepNum: stepNum,
        steps: steps
    }

    return fetch(baseUrl + '/steps', {
            method: 'POST',
            body: JSON.stringify(newRecipe),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.text())
        .then(steps => dispatch(addRecipeSteps(steps)))
        .catch(error => {
            console.log('Recipe steps ', error.message)
            alert('Your recipe steps could not be published.\nError: ' + error.message)
        });
};

export const editRecipeSteps = (recipeId, stepNum, steps) => (dispatch) => {
    const updatedRecipe = {
        stepNum: stepNum,
        steps: steps,
    }
    return fetch(baseUrl + '/edit/steps/' + recipeId, {
            method: 'PUT',
            body: JSON.stringify(updatedRecipe),
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(id => dispatch(editRecipeStepsSuccess(id)))
        .catch(error => { throw (error) });
}

export const editRecipeStepsSuccess = (recipeId) => ({
    type: ActionTypes.EDIT_RECIPESTEPS,
    payload: recipeId
})


export const fetchRecipeSteps = () => (dispatch) => {
    // dispatch(recipeStepsLoading(true));

    return fetch(baseUrl + "/steps", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(steps => dispatch(addRecipeSteps(steps)))
        .catch(error => dispatch(recipeStepsFailed(error.message)));
}



export const recipeStepsLoading = (status) => ({
    type: ActionTypes.RECIPESTEPS_LOADING,
    payload: status
});

export const recipeStepsFailed = (errmess) => ({
    type: ActionTypes.RECIPESTEPS_FAILED,
    payload: errmess
});

export const deleteRecipeSteps = () => ({
    type: ActionTypes.DELETE_RECIPESTEPS
});

export const addRecipeSteps = (steps) => ({
    type: ActionTypes.ADD_RECIPESTEPS,
    payload: steps
});

//----------------------------------RECIPESTEPS
//----------------------------------RECIPETAGS
export const fetchRecipeTags = () => (dispatch) => {
    // dispatch(recipeStepsLoading(true));

    return fetch(baseUrl + "/tags", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(tags => dispatch(addRecipeTags(tags)))
        .catch(error => dispatch(recipeTagsFailed(error.message)));
}

export const postRecipeTags = (recipeId, tag) => (dispatch) => {
    const newTag = {
        recipeId: recipeId,
        tag: tag,
    }

    return fetch(baseUrl + '/tags', {
            method: 'POST',
            body: JSON.stringify(newTag),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.text())
        .then(steps => dispatch(addRecipeTags(steps)))
        .catch(error => {
            console.log('Recipe tags ', error.message)
            alert('Your recipe tag could not be published.\nError: ' + error.message)
        });
};

export const recipeTagsLoading = (status) => ({
    type: ActionTypes.RECIPETAGS_LOADING,
    payload: status
});

export const recipeTagsFailed = (errmess) => ({
    type: ActionTypes.RECIPETAGS_FAILED,
    payload: errmess
});

export const deleteRecipeTags = () => ({
    type: ActionTypes.DELETE_RECIPETAGS
});

export const addRecipeTags = (tags) => ({
    type: ActionTypes.ADD_RECIPETAGS,
    payload: tags
});
//----------------------------------RECIPETAGS
//----------------------------------FAVORITES
export const fetchFavorites = () => (dispatch) => {
    // dispatch(recipeStepsLoading(true));

    return fetch(baseUrl + "/favorites", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(faves => dispatch(addFavorites(faves)))
        .catch(error => dispatch(recipeTagsFailed(error.message)));
}

export const postFavorite = (recipeId, userId) => (dispatch) => {
    const newFave = {
        recipeId: recipeId,
        userId: userId
    }

    return fetch(baseUrl + '/favorites', {
            method: 'POST',
            body: JSON.stringify(newFave),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.text())
        .then(fave => dispatch(addFavorite(fave)))
        .catch(error => {
            console.log('Favorites ', error.message)
            alert('Your fave could not be posted.\nError: ' + error.message)
        });
};

export const favoritesLoading = (status) => ({
    type: ActionTypes.FAVORITES_LOADING,
    payload: status
});

export const favoritesFailed = (errmess) => ({
    type: ActionTypes.FAVORITES_FAILED,
    payload: errmess
});

export const deleteFavorites = (recipeId, userId) => (dispatch) => {

    return fetch(baseUrl + '/favorites/' + recipeId + '/' + userId, {
            method: 'DELETE'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.text())
        .then(() => dispatch(deleteFavoritesSuccess(recipeId, userId)))
        .catch(error => { throw (error) });
}

export const deleteFavoritesSuccess = (rId, uId) => ({
    type: ActionTypes.DELETE_FAVORITES,
    payload:{
        recipeId: rId,
        userId: uId
    }
});

export const addFavorites = (faves) => ({
    type: ActionTypes.ADD_FAVORITES,
    payload: faves
});

export const addFavorite = (fave) => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: fave
});
//----------------------------------FAVORITES
//----------------------------------MEALPLAN
export const fetchMealPlan = () => (dispatch) => {
    // dispatch(mealPlanLoading(true));

    return fetch(baseUrl + "/mealplans", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(mealPlan => dispatch(addMealPlan(mealPlan)))
        .catch(error => dispatch(mealPlanFailed(error.message)));
}

export const postMealPlan = (userId, planId, recipeId, start, stop) => (dispatch) => {
    const newMealPlan = {
        userId: userId,
        planId: planId,
        recipeId: recipeId,
        start: start,
        stop: stop
    }

    return fetch(baseUrl + '/mealplans', {
            method: 'POST',
            body: JSON.stringify(newMealPlan),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.text())
        .then(response => dispatch(addMealPlan(response)))
        .catch(error => {
            console.log('Post meal plan ', error.message)
            alert('Your meal plan could not be added.\nError: ' + error.message)
        });
};

export const editMealPlan = (planId, recipeId, start, stop) => (dispatch) => {
    const updatedPlan = {
        planId: planId,
        recipeId: recipeId,
        start: start,
        stop: stop
    }
    return fetch(baseUrl + '/mealplans/' + planId, {
            method: 'PUT',
            body: JSON.stringify(updatedPlan),
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(id => dispatch(editMealPlanSuccess(id)))
        .catch(error => { throw (error) });
}

export const editMealPlanSuccess = (id) => ({
    type: ActionTypes.EDIT_MEALPLAN,
    payload: id
})

export const mealPlanLoading = () => ({
    type: ActionTypes.MEALPLAN_LOADING
});

export const mealPlanFailed = (errmess) => ({
    type: ActionTypes.MEALPLAN_FAILED,
    payload: errmess
});

export const deleteMealPlan = () => ({
    type: ActionTypes.DELETE_MEALPLAN
});

export const addMealPlan = (mealplans) => ({
    type: ActionTypes.ADD_MEALPLAN,
    payload: mealplans
});
//----------------------------------MEALPLAN
//----------------------------------COMMENTS
export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (recipeId, userId, rating, comment) => (dispatch) => {
    const newComment = {
        recipeId: recipeId,
        rating: rating,
        userId: userId,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + '/reviews', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('Post comments ', error.message)
            alert('Your comment could not be posted.\nError: ' + error.message)
        });
};

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + "/reviews/recipe")
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: errmess
});

export const deleteComment = (id) => (dispatch) => {

    return fetch(baseUrl + '/reviews/' + id, {
            method: 'DELETE'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(id => dispatch(deleteCommentSuccess(id)))
        .catch(error => { throw (error) });
}

export const deleteCommentSuccess = (id) => ({
    type: ActionTypes.DELETE_COMMENT,
    payload: id
})

export const editComment = (id, rating, comment) => (dispatch) => {

    return fetch(baseUrl + '/reviews/' + id + '?rating=' + rating + '&comment=' + comment, {
            method: 'PUT'
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then((id, rating, comment) => dispatch(editCommentSuccess(id, rating, comment)))
        .catch(error => { throw (error) });
}

export const editCommentSuccess = (id, rating, comment) => ({
        type: ActionTypes.EDIT_COMMENT,
        payload: {
            id: id,
            rating: rating,
            comment: comment
        }
    })
    //----------------------------------COMMENTS