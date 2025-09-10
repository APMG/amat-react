import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

const deps = Object.keys(pkg.dependencies || {});
const peerDeps = Object.keys(pkg.peerDependencies || {});
const defaultExternal = deps.concat(peerDeps);

export default [
  {
    input: 'src/main.js',
    external: defaultExternal,
    output: [{ file: pkg.main, format: 'cjs' }],
    plugins: [
      babel({
        exclude: ['node_modules/**', '*.json']
      }),
      json()
    ]
  }
];
