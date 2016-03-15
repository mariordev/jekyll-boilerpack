module.exports = function (grunt) {
    require('jit-grunt')(grunt);
    
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/css/main-min.css': '_source/sass/main.scss'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'assets/js/main-min.js': ['_source/js/main.js']
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'assets/css/*.css'
            }
        },
        watch: {
            styles: {
                files: ['_source/sass/*.scss'],
                tasks: ['sass'],
                options: {
                    nospawn: true
                }
            },
            js: {
                files: ['_source/js/*.js'],
                tasks: ['uglify'],
                options: {
                    nospawn: true
                }
            },
            prefix: {
                files: ['assets/css/*.css'],
                tasks: ['postcss'],
                options: {
                    nospawn: true
                }
            }
        }
    });
    
    grunt.registerTask('default', ['sass', 'uglify', 'postcss', 'watch']);
};
