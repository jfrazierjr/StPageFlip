import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
//import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: 'src/PageFlip.ts',
        output: [{ file: 'dist/js/page-flip.module.mjs', format: 'es' }],
        plugins: [
            postcss(),
            typescript({ tsconfig: 'tsconfig.json', useTsconfigDeclarationDir: true }),
            //terser(),
        ],
    },
    {
        input: 'src/PageFlip.ts',
        output: [{ file: 'examples/js/page-flip.module.mjs', format: 'es' }],
        plugins: [
            postcss(),
            typescript({ tsconfig: 'tsconfig.json', useTsconfigDeclarationDir: true }),
            //terser(),
        ],
    },
];
