To run a TypeScript (.ts) file locally, you need to follow these steps:

1. Install Node.js and npm (Node Package Manager)
Download and install Node.js from nodejs.org. This will also install npm, which is used to manage packages.
2. Install TypeScript
Open a terminal or command prompt and run the following command to install TypeScript globally:
- npm install -g typescript
This installs the TypeScript compiler (tsc), which is used to compile TypeScript files into JavaScript.
3. Create a TypeScript File
Create a file with the .ts extension, for example, example.ts, and add your TypeScript code to it.
4. Compile the TypeScript File
Open the terminal, navigate to the directory containing your .ts file, and run the following command to compile the file:
- tsc example.ts
This command will generate a corresponding .js file, example.js, in the same directory.
5. Run the Compiled JavaScript File
Use Node.js to run the compiled JavaScript file:
- node example.js
