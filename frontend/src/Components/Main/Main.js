import React, {Component} from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Recipes from '../Home/RecipesList'
import Groceries from '../Home/GroceryList'
import MealPlans from '../Home/MealPlans'
import {addToken, deleteUser} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser())}
});

class Main extends Component {
    constructor(props){
        super(props);
    }

    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
    }

    render(){
        return(
            <div>
                {/* Passes the token and the handleLogout method to the Header component. */}
                <Header token={this.props.token.token} handleLogout={this.handleLogout}/>
                <Switch>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>
                    <Route path='/recipes' component={() => <Recipes/>}/>
                    <Route path='/groceries' component={() => <Groceries/>}/>
                    <Route path='/mealplans' component={() => <MealPlans/>}/>
                    <Route path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/>
                    <Redirect to='/login'/>
                </Switch>
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));