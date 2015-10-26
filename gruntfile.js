module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		webpack: {
			options: {
				entry: "./src/index.js",
				output: {
					path: "./build",
					filename: "bundle.js"
				},
				module: {
					loaders: [
						{ test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"},
						{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
					]
				},
				devtool: "#source-map"
			},
			default: {
				watch: false,
				keepalive: false
			},
			watch: {
				watch: true,
				keepalive: true,
				failOnError: false
			}
		}
	})

	grunt.loadNpmTasks('grunt-webpack');


	grunt.registerTask('default', ['webpack:watch']);

}