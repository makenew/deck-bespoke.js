import bespoke from 'bespoke'
import keys from 'bespoke-keys'
import cube from 'bespoke-theme-cube'

const plugins = [
  keys(),
  cube()
]

export default (element) => {
  bespoke.from(element, plugins)
}
