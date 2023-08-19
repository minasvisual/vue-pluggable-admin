import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import scss from "rollup-plugin-scss"; 

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/library.js'
      },
      {
        format: 'cjs',
        file: 'dist/library.cjs'
      }, 
    ],
    plugins: [
      vue({ css:true }), 
      peerDepsExternal(),
      scss({
        fileName: "vue3-pluggable-admin.css",
        failOnError: true,
      }), 
    ]
  }
]