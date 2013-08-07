require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';
    // use app here
    if(app) {
        console.log("Hello, if you are reading this then I guess you are interested in how this site works.");
        console.log("You will have a hard time reading the Javascript and css for this site because it has all been optimized.");
        console.log("The site is built with Yeoman and the source is available on github. I suggest you look there.");
    }
    console.log('Running jQuery %s', $().jquery);
});
