import React from 'react';
import PropTypes from 'prop-types';

/* application components */
import { Header } from '../../components/Header';


class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

    render() {
        return (
            <div>
                <Header />
                <div
                    id="main"
                    className="container"
                    style={{ marginTop: 10, paddingBottom: 250 }}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node,
};

export { App };
