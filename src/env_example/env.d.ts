
/**
 * @declare_file
 * In order to tell Typescript about the environment variables you
 * you plan to use and thus expect to exist, you need to add
 * the following lines before you use `process.env`:
 */
declare var process : {
    env: {
        MY_ENV: string,
        MY_FILE_ENV: string,
        GREETING: string
    }
}

