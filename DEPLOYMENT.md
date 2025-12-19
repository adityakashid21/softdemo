# 🚀 Deployment Guide - Elite Cafes & Hotels

This guide will help you deploy your website to production.

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- [x] All components are working correctly
- [x] Build completes without errors (`npm run build`)
- [x] All images and assets are optimized
- [x] Meta tags and SEO are properly set
- [x] Logo and favicon are in place
- [x] All links are working (especially booking page)
- [x] Mobile responsiveness is tested

## 🌐 Deployment Options

### Option 1: Netlify (Easiest & Recommended)

**Why Netlify?**
- Free hosting for static sites
- Automatic HTTPS
- Continuous deployment from Git
- Custom domain support
- Fast global CDN

**Steps:**

1. **Prepare your repository**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add custom domain: `elitecafeshotels.com`
   - Follow DNS configuration instructions

4. **Environment Variables (if needed)**
   - Site settings → Environment variables
   - Add any API keys or secrets

---

### Option 2: Vercel (Great Alternative)

**Why Vercel?**
- Optimized for React/Vite
- Automatic deployments
- Free SSL
- Excellent performance

**Steps:**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Custom Domain**
   - Project settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

---

### Option 3: GitHub Pages (Free)

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.ts**
   Add base URL:
   ```typescript
   export default defineConfig({
     base: '/softdemo/',  // Your repo name
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Your site will be at: `https://yourusername.github.io/softdemo/`

---

### Option 4: Traditional Web Hosting

**For cPanel/Shared Hosting:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files**
   - Upload everything from the `dist/` folder to your web server
   - Use FTP/SFTP or cPanel File Manager
   - Upload to `public_html/` or your domain's root folder

3. **Configure .htaccess** (for React Router)
   Create `.htaccess` in your root folder:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 🔧 Post-Deployment Configuration

### 1. Update URLs

If using a custom domain, update these files:

**index.html:**
```html
<link rel="canonical" href="https://yourdomain.com" />
```

**package.json:**
```json
"homepage": "https://yourdomain.com"
```

### 2. Set up Analytics (Optional)

Add Google Analytics to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Performance Optimization

- Enable Gzip compression on your server
- Set up CDN for assets (Cloudflare is free)
- Optimize images (already done with WebP)
- Enable browser caching

---

## 🎯 Quick Deploy Commands

**For Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

**For Vercel CLI:**
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Routes not working (404 on refresh)
- Make sure you have proper redirect rules
- For Netlify: Create `public/_redirects`:
  ```
  /*    /index.html   200
  ```
- For Vercel: Create `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```

### Images not loading
- Check image paths are relative
- Ensure images are in `public/` or imported in components
- Verify build includes all assets

---

## 📊 Monitoring

After deployment, monitor:
- Site performance (Google PageSpeed Insights)
- Uptime (UptimeRobot - free)
- Analytics (Google Analytics)
- Error tracking (Sentry - optional)

---

## ✅ Final Checklist

Before going live:

- [ ] Test all pages and links
- [ ] Test booking form
- [ ] Check mobile responsiveness
- [ ] Verify all images load
- [ ] Test on different browsers
- [ ] Check SEO meta tags
- [ ] Set up SSL certificate (auto with Netlify/Vercel)
- [ ] Add custom domain
- [ ] Set up email forwarding (if needed)
- [ ] Create social media accounts
- [ ] Announce launch! 🎉

---

**Need Help?**

Contact: Aditya Kashid (Developer)

**Good luck with your launch! 🚀**
