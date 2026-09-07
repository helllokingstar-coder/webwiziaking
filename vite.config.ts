import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function imageSaverPlugin(): Plugin {
  return {
    name: 'image-saver',
    configureServer(server) {
      server.middlewares.use('/api/save-hero-image', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => { body += chunk; });
          req.on('end', () => {
            try {
              const { dataUrl } = JSON.parse(body);
              if (dataUrl && typeof dataUrl === 'string' && dataUrl.startsWith('data:image/')) {
                const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
                const buffer = Buffer.from(base64Data, 'base64');
                const targetPath1 = path.resolve(__dirname, 'src/assets/images/british_woman_hero_transparent.png');
                const targetPath2 = path.resolve(__dirname, 'src/assets/images/british_woman_user.png');
                fs.writeFileSync(targetPath1, buffer);
                fs.writeFileSync(targetPath2, buffer);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, path: targetPath1 }));
                return;
              }
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err?.message || 'Server error' }));
              return;
            }
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid image data' }));
          });
        } else {
          res.writeHead(405).end();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), imageSaverPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
