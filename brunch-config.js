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
              urlprefix () {
                const url = process.env.DOMAIN || 'makenew.github.io'
                const baseurl = typeof process.env.BASEURL === 'string'
                  ? process.env.BASEURL
                  : '/deck-bespoke.js'
                return `https://${url}${baseurl}`
              },
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
