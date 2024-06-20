// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// Example of converting absolute import paths for images imported from /public into relative imports
// Before
// import logo from '/logo.png'

// After
import logo from '../public/logo.png'

// Example of passing the image src property instead of the whole image object to your <img> tag
// Before
// <img src={logo} />

// After
<img src={logo.src} />