import React from 'react';
import { browserHistory } from 'react-router'

class Main extends React.Component{

    constructor(props, context) {
        super(props, context);

        this.router = context.router || null;

        this.handlerRedirect = this.handlerRedirect.bind(this);
    }

    handlerRedirect() {
        this.context.router.push('/profile');
    }

    render () {
        return (
            <div onClick={this.handlerRedirect}>Main</div>
        )
    }
}

Main.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Main;