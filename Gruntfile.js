const mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'css/style.css': 'sass/style.scss'
            }
        }
    },

   imagemin: {                          // Task
        dynamic: {                         // Another target
            options: {                       // Target options
                optimizationLevel: 2,
                svgoPlugins: [{ removeViewBox: false }],
                use: [mozjpeg()],
                progressive: true,
                cache: false
            },
            files: [{
                expand: true,                  // Enable dynamic expansion
                cwd: 'src/',                   // Src matches are relative to this path
                src: ['**/*.{png,jpg,gif}', '!dist/**'],   // Actual patterns to match
                dest: 'dist/'                  // Destination path prefix
            }]
        }
    },

 watch: {
    scripts: {
        files: ['sass/style.scss'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
    }
}
	
  });

  // Load the plugins tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch', 'imagemin']);
};
