package com.techelevator.dao;
import com.techelevator.model.MealPlanNotFoundException;
import com.techelevator.model.MealPlans;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class JdbcMealPlanDao implements MealPlanDao {
    private JdbcTemplate jdbcTemplate;
    public JdbcMealPlanDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public List<MealPlans> listMealPlans() {
        List<MealPlans> plans = new ArrayList<>();
        String sql = "SELECT user_id, plan_id, recipe_id, start, stop FROM mealplans ";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()) {
            MealPlans plan = mapRowToMealPlans(results);
            plans.add(plan);
        }
        return plans;
    }
    @Override
    public MealPlans getMealPlan(long id) {
        MealPlans plan = null;
        String sql = "SELECT * FROM mealplans WHERE plan_id = ? ";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql,id);
        if(results.next()) {
            plan = mapRowToMealPlans(results);
        } else {
            throw new MealPlanNotFoundException();
        }
        return plan;
    }
    @Override
    public boolean addMealPlan(MealPlans mealPlan) {
        String sql = "INSERT INTO mealplans (user_id, plan_id, recipe_id, start, stop) " +
                "VALUES (?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql,mealPlan.getUserId(), mealPlan.getPlanId(), mealPlan.getRecipeId(),
                mealPlan.getStart(),mealPlan.getStop()) == 1;
    }
    @Override
    public boolean editMealPlan(long id, MealPlans mealPlan) {
        String sql = "UPDATE mealplans SET start = ?, stop = ? " +
                "WHERE recipe_id = ? AND plan_id = ?";
        return jdbcTemplate.update(sql, mealPlan.getStart(), mealPlan.getStop(),
                mealPlan.getRecipeId(), mealPlan.getPlanId()) == 1;
    }
    @Override
    public boolean deleteMealPlan(long id) {
        String sql = "DELETE FROM mealplans WHERE plan_id = ? ";
        return jdbcTemplate.update(sql, id) == 1;
    }
    private MealPlans mapRowToMealPlans(SqlRowSet rs) {
        MealPlans plans = new MealPlans();
        plans.setUserId(rs.getLong("user_id"));
        plans.setPlanId(rs.getLong("plan_id"));
        plans.setRecipeId(rs.getLong("recipe_id"));
        plans.setStart(rs.getString("start"));
        plans.setStop(rs.getString("stop"));
        return plans;
    };
}
