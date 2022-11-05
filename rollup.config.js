import typescript from 'rollup-plugin-typescript2';
import swc from 'rollup-plugin-swc';
import { terser } from 'rollup-plugin-terser';

const config = () => {
  const plugins = [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    swc({
      rollup: {
        exclude: /node_modules/,
      },
      jsc: {
        parser: {
          syntax: 'typescript',
        },
        target: 'es2018',
      },
    }),
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.push(terser());
  }

  return {
    input: 'src/index.ts',
    output: {
      format: 'esm',
      dir: 'dist',
      preserveModules: true,
    },
    plugins,
    external: ['react/jsx-runtime'],
  };
};

export default config;
