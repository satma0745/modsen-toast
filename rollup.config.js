import path from 'path'

import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'

import svgr from '@svgr/rollup'

import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

const resolvePath = (dir) => {
  return path.resolve(__dirname, dir)
}

const config = [
  {
    input: './src/index.js',
    output: [
      {
        file: './dist/index.js',
        format: 'es',
        exports: 'named'
      }
    ],
    plugins: [
      svgr(),
      alias({
        entries: [
          { find: '@components', replacement: resolvePath('./src/components') },
          { find: '@data', replacement: resolvePath('./src/data') },
          { find: '@hooks', replacement: resolvePath('./src/hooks') }
        ]
      }),
      babel({
        exclude: './node_modules/**',
        presets: ['@babel/preset-react']
      }),
      external(),
      resolve({
        extensions: ['.mjs', '.js', '.jsx', '.json', '.node']
      }),
      terser()
    ]
  }
]

export default config
