import { defineConfig } from 'umi';

export default defineConfig({
  npmClient: 'npm',
  // publicPath: './',
  lessLoader: {
    modifyVars: {
      'primary-color': '#5b25a7',
    },
    javascriptEnabled: true,
  },
});
