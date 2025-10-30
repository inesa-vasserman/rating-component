import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import { babel } from '@rollup/plugin-babel';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: 'src/index.jsx',
  output: {
    dir: 'public',
    // to efficiently cache files when serving
    entryFileNames: '[name].[hash].js',
    assetFileNames: '[name].[hash][extname]',
    sourcemap: false,
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
      sourceMap: false,
    }),
    copy({
      targets: [
        { src: 'assets/*', dest: 'public' },
      ],
    }),
    babel({
      babelHelpers: 'bundled',
    }),
    htmlTemplate({
      template: 'index.html',
      target: 'index.html',
      minimize: true,
    }),

  ],
});
