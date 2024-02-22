# TypeScript

# TypeScript Environment Setup and Debugging Guide

This guide provides step-by-step instructions to set up a TypeScript environment and debug TypeScript applications.

#  Environment Setup

1.Install TypeScript Globally:

npm i -g typescript

2.Check TypeScript Version:

tsc --v

3.Configure TypeScript Compiler

Initialize tsconfig File:

tsc --init

4.Configure tsconfig.ts File:

Set up the root folder (e.g., src) here I have crated ts folder to store TypeScript files.
Change the outDir value to specify the folder for JavaScript files (e.g., dist) here I have created js folder. 

Uncomment 'noEmitOnError' to prevent JS file generation on error.

TO Debug TypeScript Application

Enable Source Maps:

uncomment the 'sourceMap' in the tsconfig.ts -> maps the .ts code into the generated .js code

Create a Launch Configuration:

1.Click on the Run and Debug option in the left sidebar of VS Code.
2.Choose 'Create a launch.json file' and select the Node.js option.
This creates a launch.json file.

Add Pre-Launch Task:
Add the following code under the 'program' in launch.json:

"preLaunchTask": "tsc: build - tsconfig.json"

Now, your TypeScript environment is set up, and you can debug your TypeScript applications using Visual Studio Code.

