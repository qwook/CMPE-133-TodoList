module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		primus: {
			dest: 'build/primus.js',
			options: {
				transformer: 'sockjs'
			}
		},
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

	/* */
	var Primus = require('primus');

	grunt.registerMultiTask('primus', 'generate primusjs client library', function () {
		var server = require('http').createServer(function(req, res){ });
		var primus = new Primus(server, this.options());
		var js = primus.library();

		grunt.file.write(this.data, js, {encoding: 'utf8'});
	});


	grunt.registerTask('default', ['primus', 'webpack:watch']);

}