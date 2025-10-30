export default {
  presets: [
    // uses the jsx imports
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    ['transform-inline-environment-variables', { include: ['NODE_ENV'] }],
  ],
};
