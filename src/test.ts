declare var global: any;
global.exports = global.exports || {};
import { runTestApp } from "@nativescript/unit-test-runner";
// import other polyfills here

declare let require: any;

runTestApp({
	runTests: () => {
		const tests = require.context("./", true, /\.spec\.ts$/);
		tests.keys().map(tests);
	},
});
