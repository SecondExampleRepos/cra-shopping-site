// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
}

export default nextConfig

// Example React component file

// Before
// import logo from '/logo.png'

// After
import logo from '../public/logo.png'

// Before
// <img src={logo} />

// After
<img src={logo.src} />