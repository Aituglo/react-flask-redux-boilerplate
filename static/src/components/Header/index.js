import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {history} from '../../store/configureStore';

import { Navbar, NavItem, Dropdown } from 'react-materialize';

import * as actionCreators from '../../actions/auth';

function mapStateToProps(state) {
    return {
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export class Header extends Component {
    constructor(props) {
        super(props);

    }

    logout(e) {
        e.preventDefault();
        this.props.logoutAndRedirect('/home');
    }

    change_url(route){
        history.push(route);  
    }


    render() {
        return (
            <header>
                
                    {
                        !this.props.isAuthenticated ?
                            <div>
                                <Navbar brand={<a />} className="blue darken-3" alignLinks="left">
                                    <a onClick={() => this.change_url('/home')} href="#" className="brand-logo center">react-flask-redux-boilerplate</a>
                                    <NavItem onClick={() => this.change_url('/home')}>
                                        Home
                                    </NavItem>
                                    <NavItem onClick={() => this.change_url('/register')}>
                                        Register
                                    </NavItem>
                                    <NavItem onClick={() => this.change_url('/login')}>
                                        Login
                                    </NavItem>
                                </Navbar>

                            </div>
                            :
                            <div>
                                <Navbar brand={<a />} className="blue darken-3" alignLinks="left">
                                    <a onClick={() => this.change_url('/home')} href="#" className="brand-logo center">react-flask-redux-boilerplate</a>
                                    <NavItem onClick={() => this.change_url('/main')}>
                                        Home
                                    </NavItem>
                                    <NavItem onClick={() => this.change_url('/account')}>
                                        Account
                                    </NavItem>
                                    <NavItem onClick={(e) => this.logout(e)}>
                                        Logout
                                    </NavItem>
                                </Navbar>
                            </div>
                    }
          
            </header>

        );
    }
}

Header.propTypes = {
    logoutAndRedirect: PropTypes.func,
    isAuthenticated: PropTypes.bool,
};
