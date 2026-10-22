// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.subangjayabiggesttodtownship.com.my',
  output: 'server',
  integrations: [icon()],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
