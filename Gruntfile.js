

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
	grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);
};
