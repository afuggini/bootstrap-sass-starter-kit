'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		project: {
			app: ['app'],
			assets: ['<%= project.app %>'],
			css: ['<%= project.assets %>/sass/styles.scss']
		},
		sass: {
			dev: {
				options: {
					style: 'expanded',
					compass: false
				},
				files: {
					'<%= project.assets %>/css/styles.css':'<%= project.css %>'
				}
			}
		},
		watch: {
			sass: {
				files: '<%= project.assets %>/sass/{,*/}*.{scss,sass}',
				tasks: ['sass:dev']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
    'sass:dev',
		'watch'
	]);

};
