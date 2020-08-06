/**
 * @hello_world
 * This script prints `Hello World` to the console.
 */
/**
 * @run_basic
 * When you run this script with the command
 * `node src/env_example/index.js`, it produces
 * the following output
 * 
 * ![Result of the basic script](../assets/env_1.png)
 */
console.log("Hello World");

/**
 * @hello_env
 * You can easily set an environment variable by
 * prepending it to the `node`-command like this:
 * `MY_ENV=development node src/env_example/index.js`.
 * 
 * Node.JS adds your environment variables to `process.env`.
 * `process.env` is a Javascript object whose properties are the
 * names of the environment variables (here: `MY_ENV`).
 * 
 * You can access an environment variable's value 
 * through the property of the `process` global object.
 */
/**
 * @run_env
 * When you run your script with `MY_ENV=development node src/env_example/index.js`,
 * it produces the following output
 * 
 * ![Result of the basic script](../assets/env_2.png)
 */
{
    console.log(`Hello ${process.env.MY_ENV} environment`);
    console.log(`Hello ${process.env["MY_ENV"]} environment`);
}


/**
 * @run_file
 * Unfortunately, `.env`-files do not work out of the box in Node.
 * But there is the `dotenv`-library. With more than 18 million 
 * downloads per week (see [NPM](https://www.npmjs.com/package/dotenv)),
 * it is safe to declare it a de facto standard.
 * 
 * Install `dotenv` using your package manager. 
 * ```
 * # with npm 
 * npm install dotenv
 *
 * # or with Yarn 
 * yarn add dotenv
 * ```
 * 
 * As early as possible in your application, require and configure dotenv.
 */
/**
 * Alternatively, if you want to keep your code clean from the configuration
 * call, you can use the `--require` (`-r`) command line option to preload `dotenv`.
 * 
 * For example, if you run: `node -r dotenv/config ./src/env_example/index.js`,
 * you can skip the `require('dotenv').config()` in your code.
 */
//require('dotenv').config();

/**
 * @hello_file
 * The usual way of handling multiple environment variables is to
 * create a `.env` file in the root directory of your project.
 * This is the directory you run the `node`-command from.
 * 
 * `.env`-files list each environment variable on a new line in the
 * form of `NAME=VALUE`.
 * 
 * Note: There are no blanks before and after the `=`-sign
 * 
 * This is an exemplary `.env`-file (Usually the default `.env` file has no
 * name. The full name really is `.env`)
 * 
 * ```
 * MY_FILE_ENV=production
 * GREETING=Hi
 * ```
 */
console.log(`${process.env.GREETING} ${process.env.MY_FILE_ENV} environment`);

