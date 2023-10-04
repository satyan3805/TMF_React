README.md

React Tutorial Git Repo.

steps:
1: create git repo
2: int git to your local project
3: link remote git repo
4: push to remote git repo

5: include npm to our app
>npm init -y // dont use -y option

package name: (tmf_react)
version: (1.0.0)  
description: first react app  
entry point: (App.js)  
test command: jest  
git repository: (https://github.com/satyan3805/TMF_React.git)  
keywords: react demo app npm  
author: satyan3805  
license: (ISC)

finally creates pacakge.json -- its a configuration for npm.

6: install dependencies:
bundler, (webpack, vite, or parcel)
--we use parcel (this gives strength to our react app)
>npm install -D parcel
-- dev dependencies, normal depedencies
--  -D option makes it as dev dependecy.
--this will take some time

-- observe below entry in pacakge.json
-- ^: caret to install next minor version automatic
-- ~: tilde to install nect major version automatic
"devDependencies": {
    "parcel": "^2.9.3"
  }
-- observe pacakge-lock.json added to project
-- pacakge-lock.json keeps exact version of the pacakges
-- observe node_modules got created.
-- node_modules contains all the dependencies and its sub dependencies. called transitive dependencies
-- every node_module is a one package and has its own pacakge.json and the respective dependencies.

7: create .gitignore file
add /node_modules entry to .gitignore file.
-- npm install can re create all the dependencies

8: build the app using parcel
> npx parcel index.html

-- npm to build a package
-- npx to execute a pacakge

-- cdn links are not good practice to get React and ReactDOM objects
-- add react using npm pacakge

9: install react and react-dom using npm
> npm install react
> npm install react-dom
-- no -D option for react as its not dev dependency

-- 'npm i react' is same as 'npm install react'

10: remove cdn links and add import React and ReactDOM into App.js
-- observe error on <script src = "./App.js">
--App.js is not a normal browser script file after adding with react.
--add type="module" attribute to <script src="./App.js">
--observer error got rectified.

-- if observed error: Error: Expected content key de1e4a02ec63c4eb to exist
-- delete node_modules delete .parcel-cache and re install 
>npm install

--observe every changes you made instantly reflects on browser. -- its taken care by parcel.

