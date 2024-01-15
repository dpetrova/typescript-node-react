# Sorting algorithm app

Implementation of Bubble sort algorithm for sorting different types arrays.

## Create TS compiler configuration file

When create new config file, in the project directory, run:

### `tsc --init`

## Config the compiler

tsconfig.json is the TS compiler configuration file

## Start the compliler in watch mode

In the project directory, you can run:

### `tsc -w`

Typescript is going to compile that index.ts file in ./src directory and then spit out a index.js file in ./build directory.\
With -w flag TS compiler will watch all the files inside of the root dir (./src), so any time we change any of our code inside this directory, the compiler is going to automatically recompile everything and stick it all in to build for us.\

## Run the project

In separate terminal in the project directory, you can run:

### `node build/index.js`

## Concurrent Compilation and Execution

Create package.json:

### `npm init -y`

Install concurrently and nodemon packages:

### `npm install nodemon concurrently`

In script section:

"scripts": {
"start:build": "tsc -w",
"start:run": "nodemon build/index.js",
"start": "concurrently npm:start:\*"
}

### `npm start`

In script section it will find every script that begins with start: and then anything and start them in parallel
