package com.techelevator.controller;

import com.techelevator.dao.*;
import com.techelevator.model.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController()
@RequestMapping("/")
public class MealPlanController {

    private IngredientsDao ingredientsDao;
    private NutritionDao nutritionDao;
    private RecipeDao recipeDao;
    private GroceryListDao groceryListDao;
    private UserReviewDao userReviewDao;
    private RecipeStepsDao recipeStepsDao;
    private RecipeIngredientsDao recipeIngredientsDao;
    private UserDao userDao;

    public MealPlanController(IngredientsDao ingredientsDao, NutritionDao nutritionDao,
                              RecipeDao recipeDao, RecipeStepsDao recipeStepsDao, RecipeIngredientsDao recipeIngredientsDao,
                              GroceryListDao groceryListDao, UserDao userDao, UserReviewDao userReviewDao) {
        this.ingredientsDao = ingredientsDao;
        this.nutritionDao = nutritionDao;
        this.recipeDao = recipeDao;
        this.groceryListDao = groceryListDao;
        this.userDao = userDao;
        this.userReviewDao = userReviewDao;
        this.recipeStepsDao = recipeStepsDao;
        this.recipeIngredientsDao = recipeIngredientsDao;
    }

    /*****************************************************
    *                                                    *
    *                 INGREDIENTS APIs                   *
    *                                                    *
    *****************************************************/

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="ingredients")
    public List<Ingredients> listIngredient(){
        return ingredientsDao.listIngredient();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="ingredients/recipe")
    public List<Ingredients> listIngredientsByRecipe(@RequestParam long id){
        return ingredientsDao.listIngredientsByRecipe(id);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="ingredients/{id}")
    public Ingredients getIngredient(@PathVariable long id){
        return ingredientsDao.getIngredient(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value="ingredients")
    public void addIngredient(@Valid @RequestBody Ingredients ingredient){
        ingredientsDao.addIngredient(ingredient);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value="ingredients/{id}", method = RequestMethod.DELETE )
    public void deleteIngredient(@PathVariable long id) throws IngredientNotFoundException {
        ingredientsDao.deleteIngredient(id);
    }

    /*****************************************************
     *                                                    *
     *                 INGREDIENTS APIs                   *
     *                                                    *
     *****************************************************/
    /*****************************************************
     *                                                    *
     *                 NUTRITION APIs                     *
     *                                                    *
     *****************************************************/

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="nutrition")
    public List<Nutrition> listNutrition(){
        return nutritionDao.listNutrition();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="nutrition/{id}")
    public Nutrition getNutrition(@PathVariable long id){
        return nutritionDao.getNutrition(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value="nutrition")
    public void addNutrition(@Valid @RequestBody Nutrition nutrition){
        nutritionDao.addNutrition(nutrition);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value="nutrition/{id}", method = RequestMethod.DELETE )
    public void deleteNutrition(@PathVariable long id) throws NutritionNotFoundException {
        nutritionDao.deleteNutrition(id);
    }

    /*****************************************************
     *                                                    *
     *                 NUTRITION APIs                     *
     *                                                    *
     *****************************************************/
    /*****************************************************
     *                                                    *
     *                   RECIPE APIs                      *
     *                                                    *
     *****************************************************/

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="recipes")
    public List<Recipe> listRecipe(){
        return recipeDao.listRecipe();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="recipes/ingredient")
    public List<Recipe> listRecipesByIngredient(@RequestParam long id){
        return recipeDao.listRecipesByIngredient(id);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="recipes/{id}")
    public Recipe getRecipe(@PathVariable long id){
        return recipeDao.getRecipe(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value="recipes")
    public void addRecipe(@Valid @RequestBody Recipe recipe){
        recipeDao.addRecipe(recipe);
    }

//    @ResponseStatus(HttpStatus.ACCEPTED)
//    @PutMapping(value="recipes")
//    public void addImage(@PathVariable long id, @Valid @RequestBody byte[] image){
//        recipeDao.addImage(image);
//    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value="recipes/{id}", method = RequestMethod.DELETE )
    public void deleteRecipe(@PathVariable long id) throws NutritionNotFoundException {
        recipeDao.deleteRecipe(id);
    }
    /*****************************************************
     *                                                    *
     *                   RECIPE APIs                      *
     *                                                    *
     *****************************************************/
    /*****************************************************
     *                                                    *
     *                RECIPE STEPS APIs                   *
     *                                                    *
     *****************************************************/
    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="/steps")
    public List<RecipeSteps> listRecipeSteps(){
        return recipeStepsDao.listRecipeSteps();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="/steps/{id}")
    public RecipeSteps getRecipeSteps(@PathVariable long id){
        return recipeStepsDao.getRecipeSteps(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value="/steps")
    public void addRecipeSteps(@Valid @RequestBody RecipeSteps recipeSteps){
        recipeStepsDao.addRecipeSteps(recipeSteps);
    }
    /*****************************************************
     *                                                    *
     *                RECIPE STEPS APIs                   *
     *                                                    *
     *****************************************************/
    /*****************************************************
     *                                                    *
     *             RECIPE INGREDIENTS APIs                *
     *                                                    *
     *****************************************************/
    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="/recipes/ingredients")
    public List<RecipeIngredients> listRecipeIngredients(){
        return recipeIngredientsDao.listRecipeIngredients();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value="/recipes/ingredients")
    public boolean addRecipeIngredients(@Valid @RequestBody RecipeIngredients recipeIngredients){
        return recipeIngredientsDao.addRecipeIngredients(recipeIngredients);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value="/recipes/ingredients/{id}", method = RequestMethod.DELETE )
    public boolean deleteRecipeIngredients(@PathVariable long id) throws RecipeIngredientsNotFoundException {
        return recipeIngredientsDao.deleteRecipeIngredients(id);
    }
    /*****************************************************
     *                                                    *
     *             RECIPE INGREDIENTS APIs                *
     *                                                    *
     *****************************************************/
    /*****************************************************
     *                                                    *
     *                  GROCERY APIs                      *
     *                                                    *
     *****************************************************/

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="lists")
    public List<GroceryList> listGroceryLists(){
        return groceryListDao.listGroceryLists();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="lists/{id}")
    public GroceryList getGroceryList(@PathVariable long id){
        return groceryListDao.getGroceryList(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value="lists")
    public void addNewGroceryList(@Valid @RequestBody GroceryList groceryList){
        groceryListDao.addNewGroceryList(groceryList);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value="lists/{id}")
    public void addNewItemToGroceryList(@PathVariable long id, @Valid @RequestBody GroceryList groceryList){
        groceryListDao.addNewItemToGroceryList(id,groceryList);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value="lists/{id}", method = RequestMethod.DELETE )
    public void deleteGroceryList(@PathVariable long id) throws GroceryListNotFoundException {
        groceryListDao.deleteGroceryList(id);
    }
    /*****************************************************
     *                                                    *
     *                  GROCERY APIs                      *
     *                                                    *
     *****************************************************/
    /*****************************************************
     *                                                    *
     *                  USER REVIEW APIs                  *
     *                                                    *
     *****************************************************/
    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="reviews/user")
    public List<User> findAll(){
        return userDao.findAll();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="reviews/recipe")
    public List<UserReview> getListOfReviewsByRecipe(){
        return userReviewDao.getListOfReviewsByRecipe();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value="reviews/user/{id}")
    public List<UserReview> getListOfReviewByUser(@PathVariable long id){
        return userReviewDao.getListOfReviewByUser(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value="reviews")
    public void addReview(@Valid @RequestBody UserReview userReview){
        userReviewDao.addReview(userReview);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value="reviews/{id}", method = RequestMethod.DELETE )
    public void deleteReview(@PathVariable long id)
            throws ReviewNotFoundException {
        userReviewDao.deleteReview(id);
    }
    /*****************************************************
     *                                                    *
     *                  USER REVIEW APIs                  *
     *                                                    *
     *****************************************************/
//
//    @PutMapping(value="/cards/{id}")
//    public void update(@PathVariable int id, @RequestBody CatCard card) throws CatCardNotFoundException {
//        catCardDao.update(id, card);
//    }
//
//
//    private static final String PATH = "/error";
//
//    @RequestMapping(value ="/error")
//    public String error() {
//        return "Error handling";
//    }

}
