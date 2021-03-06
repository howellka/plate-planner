package com.techelevator.dao;

import com.techelevator.model.UserReview;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcUserReviewDao implements UserReviewDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcUserReviewDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<UserReview> getListOfReviewsByRecipe() {
        List<UserReview> reviews = new ArrayList<>();
        String sql = "SELECT id, recipe_id, user_id, rating, comment FROM user_reviews ";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()) {
            UserReview review = mapRowToReview(results);
            reviews.add(review);
        }
        return reviews;
    }

    @Override
    public List<UserReview> getListOfReviewByUser(long userId) {
        List<UserReview> reviews = new ArrayList<>();
        String sql = "SELECT id, recipe_id, user_id, rating, comment FROM user_reviews " +
                "WHERE user_id = ?";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userId);
        while(results.next()) {
            UserReview review = mapRowToReview(results);
            reviews.add(review);
        }
        return reviews;
    }

    @Override
    public boolean addReview(UserReview userReview) {
        String sql = "INSERT INTO user_reviews (id, recipe_id, user_id, rating, comment) " +
                "VALUES (DEFAULT, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql,userReview.getRecipeId(),userReview.getUserId(),
                userReview.getRating(), userReview.getComment()) == 1;
    }

    @Override
    public boolean editReview(long id, int rating, String comment) {
        String sql = "UPDATE user_reviews SET rating = ?, comment = ? " +
                "WHERE id = ?";
        return jdbcTemplate.update(sql, rating, comment, id) == 1;
    }

    @Override
    public boolean deleteReview(long id) {
        String sql = "DELETE FROM user_reviews WHERE id = ?";
        return jdbcTemplate.update(sql, id) == 1;
    }

    private UserReview mapRowToReview(SqlRowSet rs) {
        UserReview list = new UserReview();
        list.setId(rs.getLong("id"));
        list.setRecipeId(rs.getInt("recipe_id"));
        list.setUserId(rs.getInt("user_id"));
        list.setRating(rs.getInt("rating"));
        list.setComment(rs.getString("comment"));
        return list;
    };
}
