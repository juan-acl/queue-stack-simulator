import { defineConfig } from '@farmfe/core';
import path from 'path';

const root = path.resolve(__dirname, "src");

export default defineConfig({
  compilation: {
    resolve: {
      alias: {
        components: path.resolve(root, "components"),
      }
    }
  },
  plugins: [
    '@farmfe/plugin-react',
    '@farmfe/plugin-sass',
  ],
});
