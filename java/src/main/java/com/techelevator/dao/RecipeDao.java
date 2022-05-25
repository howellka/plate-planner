package com.techelevator.dao;

import com.techelevator.model.Recipe;

import java.util.List;

public interface RecipeDao {
    Recipe getRecipe(long id);

    List<Recipe> getRecipesBySearch(String searchbar);

    List<Recipe> listRecipe();

    List<Recipe> listRecipesByIngredient(long ingredient_id);

    List<Recipe> listRecipesByType(String type);

    boolean addRecipe(Recipe recipe);

    boolean editRecipe(long id, String name, int numOfSteps, String image, String notes, int userId, String type);

    boolean deleteRecipe(long id);
}
