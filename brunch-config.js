exports.config = {
  npm: {
    styles: {
      'normalize.css': ['normalize.css']
    }
  },

  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^vendor/
      },
      entryPoints: {
        'app/index.js': 'app.js'
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  overrides: {
    production: {
      plugins: {
        postcss: {
          processors: [
            require('autoprefixer'),
            require('cssnano')
          ]
        }
      }
    }
  },

  plugins: {
    digest: {
      prependHost: {
        production: '/deck-bespoke.js'
      },
      referenceFiles: /\.(css|html|js)$/
    },

    postcss: {
      processors: [
        require('autoprefixer')
      ]
    },

    sass: {
      options: {
        includePaths: ['node_modules']
      }
    },

    static: {
      processors: [
        require('html-brunch-static')({
          handlebars: {
            enableProcessor: true,
            helpers: {
              join (context, block) {
                return context.join(block.hash.delimiter)
              },
              updated_time () {
                return new Date().toISOString()
              }
            }
          }
        })
      ]
    }
  }
}
