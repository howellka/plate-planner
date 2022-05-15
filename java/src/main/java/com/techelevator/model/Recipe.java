package com.techelevator.model;

public class Recipe {

    private long id;
    private String name;
    private int numOfSteps;
    private String image;
    private String notes;
    private int userId;
    private String type;

    public Recipe() {
    }

    public Recipe(long id, String name, int numOfSteps, String image, String notes,
                  int userId, String type ) {
        this.id = id;
        this.name = name;
        this.numOfSteps = numOfSteps;
        this.image = image;
        this.notes = notes;
        this.userId = userId;
        this.type = type;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumOfSteps() {
        return numOfSteps;
    }

    public void setNumOfSteps(int numOfSteps) {
        this.numOfSteps = numOfSteps;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
