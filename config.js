// This file handles the configuration of the app.
// It is required by app.js

var express = require('express');
    path = require('path');
    engine = require('ejs-locals');
    sassMiddleware = require('node-sass-middleware');

var srcPath = __dirname + '/assets/sass';
var destPath = __dirname + '/public/css';

module.exports = function(app, io){

    app.engine('ejs', engine);

    // Set .html as the default template extension
    app.set( 'view engine', 'ejs' );

    // Initialize the ejs template engine
    // app.engine( 'html', require('ejs').renderFile );

    // Tell express where it can find the templates
    app.set( 'views', __dirname + '/views' );

    // Use the layout for the views
    app.set( 'view options', { layout:'layout.ejs' } );

    app.use(sassMiddleware({
        src: srcPath,
        dest: destPath,
        debug: true,
        outputStyle: 'compressed',
        prefix: '/css'
    }), express.static( path.join(__dirname, 'public') ) );

};
