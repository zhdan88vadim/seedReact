/*
var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

Router.run(routes, function (Root) {
    React.render(<Root />, document.getElementById('app'));
});*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './config/routes';

ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
)