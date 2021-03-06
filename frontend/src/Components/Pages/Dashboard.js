import React, { Component } from 'react'
import {Breadcrumb} from 'react-bootstrap'
import {useNavigate, Link, Route, Routes} from 'react-router-dom';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import { LocalForm } from 'react-redux-form';
import {Scheduler} from '../SubComponents/Scheduler/Scheduler';
import { isThisQuarter } from 'date-fns';


export default class Dashboard extends Component{
    constructor(props){
        super(props)

        this.state = {
            events:[{ id: 0, planId: 0, title: '', start: '', end: ''}]
        }
    }

    componentDidMount(){
        this.matchData();
    }
    matchData() {
        const userId = this.props.plans.filter((plan) => plan.userId === this.props.user.id);
    
        this.props.recipes.map((recipe, index) => {
          for(let i = 0; i < userId.length; i++){
            if(recipe.id === userId[i].recipeId){

              this.setState({ events: [...this.state.events, this.state.events.push({ id: i, planId: userId[i].planId, title: recipe.name, start: userId[i].start, end: userId[i].stop })] })
                 }
                }
            }
        )}
    
    
    render(){
        return(
            <div className='container'>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/home">Home</Link>  
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    Dashboard
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="container">
                <div className='component-body'>
                <div className="row">
                    <div>
                        {/* <div className="avatar-dash">
                            <img src={this.props.user.avatar}/>
                        </div> */}
                    </div>
                        <div className="user-info" style={{width:"fit-content"}}>
                            <h4>Hello there, {this.props.user.username}!</h4>
                        </div>
                    <div>
                        <div style={{width:"35%"}}>
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col" md={12} id="generate-plan">
                            <h5>Published Recipes</h5>


                           {this.props.recipes ?       <div className="dashboard-recipe-collection-wrapper"> 
                                            
                                                <EditDeleteRecipe 
                                                        recipes={this.props.recipes} 
                                                        user={this.props.user} 
                                                        deleteRecipe={this.props.deleteRecipe}
                                                        deleteSteps={this.props.deleteRecipeSteps}
                                                        deleteIngredients={this.props.deleteRecipeIngredients}
                                                        deleteNutrition={this.props.deleteRecipeNutrition}/></div> 
                                                        : 
                                                        <div></div>}
                        </div>
                    </div>             
                    <div className='row'>
                        <div className="col" md={12} id="generate-plan">
                            <h5>Liked Recipes</h5>


                           {this.props.favorites ?       <div className="dashboard-recipe-collection-wrapper"> 
                                            
                                            <FavoriteRecipes 
                                                    favorites={this.props.favorites} 
                                                    deleteFavorite={this.props.deleteFavorite}
                                                    recipes={this.props.recipes} 
                                                    user={this.props.user} 
                                                    deleteRecipe={this.props.deleteRecipe}
                                                    deleteSteps={this.props.deleteRecipeSteps}
                                                    deleteIngredients={this.props.deleteRecipeIngredients}
                                                    deleteNutrition={this.props.deleteRecipeNutrition}/></div> : 
                                                        <div></div>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" md={6} id="generate-plan">
                        <aside style={{width:"550px"}}>
                            <h5>Your Meal Plans</h5>
                            <Scheduler plans={this.props.plans} user={this.props.user} recipes={this.props.recipes} events={this.state.events} edit={this.props.edit}/>
                        </aside>
                        </div>
                        <div className="col" md={6} id="generate-plan">
                        <aside>
                            <h5>Your Grocery List at a Glance</h5>
                            {renderGroceryList(this.props.groceries,this.props.user)}
                        </aside>
                        </div>
                    </div>
                    </div>
                        {/* Visible if the user is registered. */}         
            </div>
    </div>
        )
    }
}

function DashEditRecipe(e){
    const navigate = useNavigate();

    return(
        <button type="button" className="dashboard-interface-button" onClick={() => {navigate('/edit/recipes/'+e.id)}}>&#9997; EDIT</button>
    )
}

function ClickToRecipe(e){
    const navigate = useNavigate();

    return(<div key={e.id}  onClick={() => navigate('/recipes/'+e.id)} className="dashboard-recipe-collection">
    <img src={e.image}/>
</div>)
}



function renderGroceryList(groceries, user) {   
    let groceryId=0;
    const userGroceryList = groceries.groceries.filter((list) => list.userId === user.id);

    const list = userGroceryList.map((item) =>{
        return(
            <li className="component-list-item" key={item.listId}>
                <div className="col" md={6}>
                    <strong>{item.ingredient_name}</strong>
                </div>
                <div className="col" md={3}>
                    Quantity {item.qty}
                </div>
            </li>
        )
    })

    return(
        <div className="container">
            <ul className="component-list">
                {list}
            </ul>
            <Link to= '/groceries'><button class="submit-buttons">Your Groceries</button></Link>
        </div>
    )
}

class FavoriteRecipes extends Component{

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            activeModal: ''
        };
    }

    deleteFave(recipeId, userId){
        this.props.deleteFavorite(recipeId,userId);
    }

    render(){
        let id = this.props.user.id;
        let filteredFaves = this.props.favorites.filter(fave => fave.userId === parseInt(id,10));
        let filteredRecipes = filteredFaves.map(fave => this.props.recipes.filter(recipe => recipe.id === parseInt(fave.recipeId,10))[0])
        const recipes = filteredRecipes.map((recipe) => {
            return(
            <div className="users-published-recipes">               
                <div id="dashboard-recipe-collection-text"><p><mark>{recipe.name}</mark></p></div>
                <ClickToRecipe id={recipe.id} image={recipe.image}/>
                    <div id="manage-recipe-buttons" md={6}>
                        <button type="button" onClick={() => this.props.deleteFavorite(recipe.id,id)}className="dashboard-interface-button" >&#10024; Unfave?</button>
                    </div>
            </div>
            )
        })
        
    
        return(
            <div className="row dashboard-recipe-collection-wrapper">
                {recipes} 
            </div>
            
            )

        }
    }

class EditDeleteRecipe extends Component{

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            activeModal: ''
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
    }

    toggleModal(activeModal){
        this.setState({
            activeModal: activeModal,
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleDelete(id){
        this.toggleModal();
        this.props.deleteRecipe(id);
        this.props.deleteSteps(id);
        this.props.deleteIngredients(id);
        this.props.deleteNutrition(id);
        window.location.reload(false);
    }

    // handleEdit(id, values){
    //     this.toggleModal();
    //     this.props.editComment(id, values.rating, values.userComment);
    //     window.location.reload(false);
    // }

    render(){
        let id = this.props.user.id;
        let filteredRecipes = this.props.recipes.filter(recipes => recipes.userId === parseInt(id,10));
    
        const recipes = filteredRecipes.map((recipe) => {
            return(
            <div className="users-published-recipes">               
                <div id="dashboard-recipe-collection-text"><p><mark>{recipe.name}</mark></p></div>
                    <ClickToRecipe id={recipe.id} image={recipe.image}/>
                    <div id="manage-recipe-buttons" md={6}>
                            <DashEditRecipe id={recipe.id}/>
                            <button type="button" className="dashboard-interface-button" onClick={() => this.toggleModal('delete')}>&#10060; DELETE</button>
                    </div>
                <Modal isOpen={this.state.activeModal === 'delete'} toggle={this.toggleModal}> 
                        <ModalHeader style={{borderBottom:0}} toggle={this.toggleModal}>Delete Recipe?</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={() => this.handleDelete(recipe.id)}>
                                {recipe.name}<br></br>
                                <button type='submit' variant='danger'>&#10060;Delete</button>
                            </LocalForm>
                        </ModalBody>
                </Modal>                  
            </div>
            )
        })
    


    
        return(
            <div className="row dashboard-recipe-collection-wrapper">
                {recipes} 
            </div>
            
            )

        }
    }


