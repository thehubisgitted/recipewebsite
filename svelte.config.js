// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { preprocessMeltUI } from '@melt-ui/pp'
import sequence from 'svelte-sequential-preprocessor'
 
const config = {
  // ... other svelte config options
  preprocess: sequence([
    // ... other preprocessors
	vitePreprocess(),
    preprocessMeltUI() // add to the end!
  ]),

  kit: {
	// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
	// If your environment is not supported or you settled on a specific environment, switch out the adapter.
	// See https://kit.svelte.dev/docs/adapters for more information about adapters.
	adapter: adapter(),
	alias: {
		$components: "src/components"
	}
}
}
 
export default config
