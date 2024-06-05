import { defineConfig } from '@rsbuild/core';
import { pluginPreact } from '@rsbuild/plugin-preact';
import { pluginCssMinimizer } from '@rsbuild/plugin-css-minimizer';

export default defineConfig({
  plugins: [pluginPreact(),pluginCssMinimizer()],
  performance: {
    chunkSplit: {
      strategy: 'split-by-module',
    },
  },
  output: {
    polyfill: 'usage',
  },
  tools: {
    rspack: {
      output: {
        asyncChunks: false,
      },
    },
  },
});


