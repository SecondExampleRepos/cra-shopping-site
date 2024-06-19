// Before
import logo from '/logo.png'

// After
import logo from '../public/logo.png'

// Before
<img src={logo} />

// After
<img src={logo.src} />

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}