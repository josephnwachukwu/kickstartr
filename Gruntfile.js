module.exports = function(grunt) {

	//load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	var filePath = '';
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			files: [
				
			],
			tasks: ['less']
		},
		watch: {
            scripts: {
                files: ['js/**/*.js','!js/main.min.js','!js/vendor.min.js'],
                tasks: ['uglify']
            },
            css: {
            	files: ['css/**/*.css','!css.main.min.js'],
            	tasks: ['cssmin']
            }
        },
        uglify: {
		    options: {
		      mangle: false
		    },
		    dist: {
		        files: {
		            'js/main.min.js': ['js/*.js','!js/main.min.js','!js/vendor.js','!js/vendor.min.js'],
		            'js/vendor.min.js': 'js/vendor.js'
		        }
		    }
		},
		cssmin: {
		  add_banner: {
		    options: {
		      banner: '/* My minified css file */'
		    },
		    files: {
		      'css/main.min.css': ['css/**/*.css', '!css/main.min.css']
		    }
		  }
		}
    });

    //grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['uglify', 'cssmin', 'watch']);


};