// 
// Develop by GD Team SFO CA. 
// 

module.exports = function(grunt) {
  grunt.initConfig({

      watch:{ // Use watch to check any change in any file down list

          jade: { // check all changes made on Jade Files
            files: ['./jade/*.jade'],
            tasks: ['jade']
          },

          jshint: { // check all changes made on JScript Files
            files: ['./js/*.js'],
            tasks: ['jshint']
          },

          less: { // check all changes made on JScript Files
            files: ['./less/*.less'],
            tasks: ['less']
          }

      },

      jade:{ // Use this Contrib "Jade" to work HTML Pages
        all:{
          options : {
            pretty : true,
          },

          files: [
            {
              expand : true,
              cwd : './jade/',
              src : '*.jade',
              dest : './html/',
              ext : '.html'
            }
          ]
        } 
      },

      jshint: { // Use this Contrib "JHint" to check all syntax .js files
          all: {
              src: './js/*.js',
          }
      },

      less: {
        development: {
          options: {
            paths: ["less/"]
          },
          files: {
             "css/mixins.css": "less/mixins.less"
          }
        },
        
      },

      karma: {
        unit: {          
          configFile: 'karma.conf.js'
        }
      }


      
  });


  // Load all Task
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');


  // Registry Main Default Tasks
  // grunt.registerTask('default',['jade','watch','fontAwesomeVars']);
  grunt.registerTask('karmaUnitTest',['karma']);
  grunt.registerTask('default',['less','jade','watch']);


  return;

};