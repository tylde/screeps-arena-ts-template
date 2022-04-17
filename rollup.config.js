import resolve from '@rollup/plugin-node-resolve';
import clear from 'rollup-plugin-clear';
import typescript from 'rollup-plugin-typescript2';

const plugins = [
  clear({ targets: ['default'] }),
  resolve(),
  typescript({
    abortOnError: false,
    tsconfig: './tsconfig.json',
    clean: true,
  }),
];

const external = [
  'game',
  'game/utils',
  'game/prototypes',
  'game/path-finder',
  'game/constants',
  'game/visual',
  'arena',
  'arena/constants',
  'arena/prototypes',
];
const format = 'esm';

const builds = [
  { input: 'alpha-spawn_and_swamp/src/main.ts', output: 'alpha-spawn_and_swamp/main.js' },
  { input: 'alpha-collect_and_control/src/main.ts', output: 'alpha-collect_and_control/main.js' },
  { input: 'alpha-capture_the_flag/src/main.ts', output: 'alpha-capture_the_flag/main.js' },
];

export default builds.map(({ input, output }) => ({
  input,
  output: { file: output, format },
  external,
  plugins,
}));
