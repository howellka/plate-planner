package com.techelevator.dao;

import com.techelevator.model.Nutrition;
import com.techelevator.model.NutritionNotFoundException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.jdbc.support.rowset.SqlRowSet;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcNutritionDao implements NutritionDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcNutritionDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Nutrition getNutrition(long id) {
        Nutrition nutrition = null;
        String sql = "SELECT id, serving_size, calories, calories_fat, total_fat, saturated_fat, " +
                "trans_fat, poly_fat, mono_fat, cholesterol, sodium, potassium, total_carbs, " +
                "dietary_fiber, sugar, sugar_alcohol, added_sugar, protein, vitA, " +
                "vitB6, vitB12, vitC, vitD, vitE, vitK, calcium, iron, magnesium, thiamine, " +
                "biotin, panto_acid, phosphorous, iodine, zinc, selenium, copper, " +
                "manganese, chromium, molybdenum, chloride FROM nutrition WHERE id = ?";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql,id);
        if(results.next()) {
            nutrition = mapRowToNutrition(results);
        } else {
            throw new NutritionNotFoundException();
        }

        return nutrition;
    }

    @Override
    public List<Nutrition> listNutrition() {
        List<Nutrition> nutritionList = new ArrayList<>();
        String sql = "SELECT id, serving_size, calories, calories_fat, total_fat, saturated_fat, " +
                "trans_fat, poly_fat, mono_fat, cholesterol, sodium, potassium, total_carbs, " +
                "dietary_fiber, sugar, sugar_alcohol, added_sugar, protein, vitA, " +
                "vitB6, vitB12, vitC, vitD, vitE, vitK, calcium, iron, magnesium, thiamine, " +
                "biotin, panto_acid, phosphorous, iodine, zinc, selenium, copper, " +
                "manganese, chromium, molybdenum, chloride FROM nutrition";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()) {
            Nutrition nutrition = mapRowToNutrition(results);
            nutritionList.add(nutrition);
        }
        return nutritionList;
    }

    @Override
    public boolean addNutrition(Nutrition nutrition) {
        String sql = "INSERT INTO nutrition (id, serving_size, calories, calories_fat, total_fat, saturated_fat, " +
                "trans_fat, poly_fat, mono_fat, cholesterol, sodium, potassium, total_carbs, " +
                "dietary_fiber, sugar, sugar_alcohol, added_sugar, protein, vitA, " +
                "vitB6, vitB12, vitC, vitD, vitE, vitK, calcium, iron, magnesium, thiamine, " +
                "biotin, panto_acid, phosphorous, iodine, zinc, selenium, copper, " +
                "manganese, chromium, molybdenum, chloride) VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, " +
                "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql, nutrition.getServingSize(), nutrition.getCalories(), nutrition.getCaloriesFat(),
                nutrition.getTotalFat(), nutrition.getSaturatedFat(), nutrition.getTransFat(), nutrition.getPolyFat(), nutrition.getMonoFat(),
                nutrition.getCholesterol(), nutrition.getSodium(), nutrition.getPotassium(), nutrition.getTotalCarbs(), nutrition.getDietaryFiber(),
                nutrition.getSugar(), nutrition.getSugarAlcohol(), nutrition.getAddedSugar(), nutrition.getProtein(), nutrition.getVitA(),
                nutrition.getVitB6(), nutrition.getVitB12(), nutrition.getVitC(), nutrition.getVitD(), nutrition.getVitE(), nutrition.getVitK(),
                nutrition.getCalcium(), nutrition.getIron(), nutrition.getMagnesium(), nutrition.getThiamine(), nutrition.getBiotin(),
                nutrition.getPantoAcid(), nutrition.getPhosphorous(), nutrition.getIodine(), nutrition.getZinc(), nutrition.getSelenium(),
                nutrition.getCopper(), nutrition.getManganese(), nutrition.getChromium(), nutrition.getMolybdenum(), nutrition.getChloride()) == 1;
    }

    @Override
    public boolean deleteNutrition(long id) {
        String sql = "DELETE FROM nutrition WHERE id = ? ";
        return jdbcTemplate.update(sql, id) == 1;
    }

    private Nutrition mapRowToNutrition(SqlRowSet rs) {
        Nutrition nutrition = new Nutrition();
        nutrition.setId(rs.getLong("id"));
        nutrition.setServingSize(rs.getString("serving_size"));
        nutrition.setCalories(rs.getDouble("calories"));
        nutrition.setCaloriesFat(rs.getDouble("calories_fat"));
        nutrition.setTotalFat(rs.getDouble("total_fat"));
        nutrition.setSaturatedFat(rs.getDouble("saturated_fat"));
        nutrition.setTransFat(rs.getDouble("trans_fat"));
        nutrition.setPolyFat(rs.getDouble("poly_fat"));
        nutrition.setMonoFat(rs.getDouble("mono_fat"));
        nutrition.setCholesterol(rs.getDouble("cholesterol"));
        nutrition.setSodium(rs.getDouble("sodium"));
        nutrition.setPotassium(rs.getDouble("potassium"));
        nutrition.setTotalCarbs(rs.getDouble("total_carbs"));
        nutrition.setDietaryFiber(rs.getDouble("dietary_fiber"));
        nutrition.setSugar(rs.getDouble("sugar"));
        nutrition.setSugarAlcohol(rs.getDouble("sugar_alcohol"));
        nutrition.setAddedSugar(rs.getDouble("added_sugar"));
        nutrition.setProtein(rs.getDouble("protein"));
        nutrition.setVitA(rs.getInt("vitA"));
        nutrition.setVitB6(rs.getInt("vitB6"));
        nutrition.setVitB12(rs.getInt("vitB12"));
        nutrition.setVitC(rs.getInt("vitC"));
        nutrition.setVitD(rs.getInt("vitD"));
        nutrition.setVitE(rs.getInt("vitE"));
        nutrition.setVitK(rs.getInt("vitK"));
        nutrition.setCalcium(rs.getInt("calcium"));
        nutrition.setIron(rs.getInt("iron"));
        nutrition.setMagnesium(rs.getInt("magnesium"));
        nutrition.setThiamine(rs.getInt("thiamine"));
        nutrition.setBiotin(rs.getInt("biotin"));
        nutrition.setPantoAcid(rs.getInt("panto_acid"));
        nutrition.setPhosphorous(rs.getInt("phosphorous"));
        nutrition.setIodine(rs.getInt("iodine"));
        nutrition.setZinc(rs.getInt("zinc"));
        nutrition.setSelenium(rs.getInt("selenium"));
        nutrition.setCopper(rs.getInt("copper"));
        nutrition.setManganese(rs.getInt("manganese"));
        nutrition.setChromium(rs.getInt("chromium"));
        nutrition.setMolybdenum(rs.getInt("molybdenum"));
        nutrition.setChloride(rs.getInt("chloride"));
        return nutrition;
    };
}
