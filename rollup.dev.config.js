import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import { babel } from '@rollup/plugin-babel';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: 'src/index.jsx',
  output: {
    dir: 'build',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    postcss({
      extract: false,
      minimize: false,
      sourceMap: true,
    }),
    serve({
      open: true,
      contentBase: 'build',
      port: 3000,
      headers: {
        'access-control-allow-origin': '*',
      },

    }),
    livereload(),
    copy({
      targets: [
        { src: 'assets/*', dest: 'build' },
      ],
    }),
    babel({
      babelHelpers: 'bundled',
    }),
    htmlTemplate({
      template: 'index.html',
      target: 'index.html',
      minimize: false,
    }),

  ],
});
