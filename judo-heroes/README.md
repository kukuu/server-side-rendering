# Isomorphic/Universal  JavaScript

A simple application built to showcase Universal JavaScript with Node.js and React. Shared JavaScript that runs on both the client and server.

## What's the point?

JavaScript driven MVCs (angular, ember, backbone, etc.) render on DOM load, this can be really slow, and can make for a bad user experience.

Another major problem is that, they aren't indexable by search engines (without paying for a third party service like pre-render-io). If your application is serving any kind of data that people might be searching for, this is a bad thing.

When you render JavaScript on the server side, you can solve these problems, and provide a better enhanced user experience.  This ensures best practices for Development Practice Adherence, Accessibility, Usability, and Governance.

###  Isomorphic Javascript Benefits:

Better overall user experience

Search engine indexable

Easier code maintenance - Single codebase for client and server

Free progressive enhancements - as the DOM elements are still made available from  on page load from the server side generated JavaScript using REACT.


Starting the application

The application is started by running the following: 

npm run    [....]

start: "cross-env NODE_ENV=production node_modules/.bin/babel-node --presets react,es2015 src/server.js",
start-dev: "npm run start-dev-hmr",
start-dev-single-page: "node_modules/.bin/http-server src/static",
start-dev-hmr: "node_modules/.bin/webpack-dev-server --progress --inline --hot --open",
build: "cross-env NODE_ENV=production node_modules/.bin/webpack -p"

