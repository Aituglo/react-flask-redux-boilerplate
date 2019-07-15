import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/data';

function mapStateToProps(state) {
    return {
        data: state.data,
        token: state.auth.token,
        loaded: state.data.loaded,
        isFetching: state.data.isFetching,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Account extends React.Component { // eslint-disable-line react/prefer-stateless-function
    componentDidMount() {
        this.fetchData();
    }


    fetchData() {
        const token = this.props.token;
        this.props.fetchProtectedData(token);
    }
    
    render() {
        return (
            <div>
                {!this.props.loaded
                    ? <h1>Loading data...</h1>
                    :
                    <div>
                        <h1>My Account</h1>
                        <hr />
                        <h3>Email Address : {this.props.data.data.email}</h3>
                        <h3>Username : {this.props.data.data.username}</h3>
                    </div>
                }
                

            </div>
        );
    }
}

Account.propTypes = {
    fetchProtectedData: PropTypes.func,
    loaded: PropTypes.bool,
    userName: PropTypes.string,
    data: PropTypes.any,
    token: PropTypes.string,
};
