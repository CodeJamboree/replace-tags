/**
 * The current version of the library.
 * This version number is updated automatically during the build process.
 * The version number is in the format: Major.Minor.Patch
 * @example
 * console.log(__VERSION__);
 * // Output 1.0.0
 */
declare const __VERSION__: string;

/**
 * The build time of the library.
 * This timestamp is updated automatically during the build proces.
 * The timestamp is in milliseconds, and represents the number of milliseconds that have passed since January 1, 1970 UTC
 * @example
 * console.log(__TIMESTAMP__);
 * // Output 1711627984471
 * console.log(new Date(__TIMESTAMP__).toISOString());
 * // Output 2024-03-28T12:13:04.471Z
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
 */
declare const __TIMESTAMP__: number;

/**
 * The build environment of the library.
 * This environment is updated automatically during the build proces.
 * The environment is a string that represents the target build environment.
 * @example
 * console.log(__ENVIRONMENT__);
 * // Output "production"
 */
declare const __ENVIRONMENT__: "production" | "development";
