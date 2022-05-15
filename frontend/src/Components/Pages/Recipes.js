import React, { Component } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Link} from 'react-router-dom'
import { Breadcrumb, Form, FormGroup } from 'react-bootstrap'
import { Control,  LocalForm, Errors } from 'react-redux-form';
import Loader from '../SubComponents/Loader/Loader';


function handleSubmit(values) {
    values.preventDefault();
    console.log(values.comment);  
         // this.props.postComment(this.props.targetRecipe.id, this.props.user, values.rating, values.comment);
        // e.stopPropagation();
}

export default class Recipes extends Component {
    constructor(props){
        super(props)
    }

  render() {
            return (
                <div className='container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/home">Home</Link>  
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Recipes
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    {/* {alert(this.props.user)} */}
                    <Recipe recipe={this.props.targetRecipe} recipeSteps={this.props.targetRecipeSteps}
                    comments={this.props.targetComments} 
                    isLoading={this.props.recipeLoading} errMess={this.props.recipeErrMess}/>
                 </div>  
            )
        }
      
}

const Recipe = (props) => {
    if(props.isLoading){
    return(<div className="container">
            <div className="row">
                <Loader/>
            </div>
        </div>);     
        
    } else if (props.errMess) {
        return(<div className="container">
        <div className="row">
            <h4>{props.errMess}</h4>
        </div>   
    </div>);  
    
    } else { 
    return(
        <div>
            {props.recipe ? <h3>{props.recipe.name}</h3> : <h3>Null</h3>}
            <div className='component-body'>
            {props.recipe ?<Ingredients target={props.recipe} /> : <div>Null</div>}
            {props.recipeSteps ?<RecipeSteps target={props.recipeSteps} />: <div>Null</div>}
            {props.recipe ?<Notes target={props.recipe.notes} /> : <div>Null</div>}
            {props.comments ? <RenderComments target={props.comments}/> : <div>Null</div>}
            
            <Form model="comments" onSubmit={(values) => handleSubmit(values)}>
                <FormGroup>                                   
                    <div  className="col" md={12}>
                    <label htmlFor="rating">Rating</label> 
                        <Control.select model='.rating' 
                        name="rating" 
                        className="form-control"
                        defaultValue={1}> 
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Control.select>
                    </div>                                     
                </FormGroup>
                <FormGroup>
                    <div  className="col" md={12}>
                    <label htmlFor="comment">Comment</label> 
                        <Control.textarea model='.comment' 
                        id="comment" 
                        name="comment" 
                        rows="6" 
                        className="form-control"/>
                    </div>
                </FormGroup>
                <FormGroup>
                    <div  className="col" md={12}>
                        <button type='submit' color="primary">Post Comment</button>
                    </div>
                </FormGroup>
            </Form>
            </div>
        </div>
    )
  }
}

function RenderComments(props){
    let arr = [];
    const recipeComments = props.target.map((comment, index) => {
        let obj =<div id="user-comment" key={index}>
                    <p>{comment.comment}</p>
                    {/* <div>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div> */}
                </div>
                 arr.push(obj)});  
    
    return (             
        <div className='row'>
            <div className='col' md={12}>
                <h5>Comments</h5>
                    {arr}
            </div>
        </div>
    )
}

function Ingredients(props) { 
    return (
      <> 
          <div className='row'>
              <div className='col' md={7}>
                   <h5>Ingredients</h5>
                   <div>This is the recipes page!</div>
              </div>
              <div className='col' id="recipe-pg-img-container" md={5}>
                  <img id="recipe-pg-img" src={props.target.image}></img>
              </div>
          </div>
      </>
    );
  }

function RecipeSteps(props) {
    let arr = [];

    const recipeSteps = props.target.map((step) => {
        let obj =<li key={step.step_num}>{step.steps}</li>
                 arr.push(obj)});  
    
    return ( <div className='row' >         
                <div className='col' md={12}>
                    <h5>Recipe Steps</h5>
                    <ol>   
                        {arr} 
                    </ol>
                </div>
            </div>
    )
}

function Notes(props) { 
        return (
        <> 
            <div className='row'>
                <div className='col' md={12}>
                    <h5>Notes</h5>
                    <p>{props.target}</p>
                </div>
            </div>
        </>
        );
  }
  