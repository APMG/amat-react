import babel from 'rollup-plugin-babel';
import pkg from './package.json';

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
        exclude: ['node_modules/**']
      })
    ]
  }
];
