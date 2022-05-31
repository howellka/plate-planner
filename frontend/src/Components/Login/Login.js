import React, {Component} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {connect} from 'react-redux'
import { withRouter } from '../WithRouer/WithRouter';
import {addToken, addUser} from '../../Redux/actionCreators'
import {baseUrl} from '../../Shared/baseUrl'
import axios from 'axios'
import {Breadcrumb} from 'react-bootstrap'


const mapDispatchToProps = (dispatch) => ({
    addToken: () =>  dispatch(addToken()),
    addUser: () => dispatch(addUser()) 
});

function ClickToLogIn(props) {
    const navigate = useNavigate();

    async function handleLogin () {
        const data = { username: props.username, password: props.password };
        const userWithToken = await axios.post(baseUrl + '/login', data)
        await props.dispatch(addToken(userWithToken.data.token))
        await props.dispatch(addUser(userWithToken.data.user));
        navigate('/home');       
    }

    // const recipeTags = props.target.map((tag) => {
    //     return(
    //             <em className='recipe-tag' onClick={() => {submitSearch(tag)}}>{tag.tag} </em>
    //         )
    //     });

    return (
        <div className="row">
            <Link to="/register">Need an account?</Link>
            <button type="submit" className='submit-buttons' onClick={() => handleLogin()}>Sign in</button>
        </div>
    )
}

class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    

    handleLogin = async () => {
        const data = { username: this.state.username, password: this.state.password };
        

        const userWithToken = await axios.post(baseUrl + '/login', data)

        
        await this.props.dispatch(addToken(userWithToken.data.token))
        await this.props.dispatch(addUser(userWithToken.data.user));
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/home">Home</Link>  
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Sign In
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="row">
                    <h3> Sign in </h3>
                    <div className="col"  md={3}>
                        <label class="sr-only">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            class="form-control"
                            placeholder="Username"
                            v-model="user.username"
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col" md={3}>
                        <label class="sr-only">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            class="form-control"
                            placeholder="Password"
                            v-model="user.password"
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                </div>
                <ClickToLogIn username = {this.state.username}
                password = {this.state.password}
                dispatch = {this.props.dispatch}/>
            </div>
        )
    }
}

export default withRouter(connect(mapDispatchToProps)(Login));