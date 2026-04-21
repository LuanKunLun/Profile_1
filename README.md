# John Doe — Personal Portfolio

> **Live site:** https://luankunlun.github.io/Profile_1/
> **Repo:** https://github.com/LuanKunLun/Profile_1

A modern, responsive personal portfolio built with **React + Vite + TypeScript + Tailwind CSS**.

---

## 🗂️ Content Entry File

**All personal content lives in one file:**

```
src/data.ts
```

Edit this file to update your name, experience, projects, skills, and contact info — no need to touch any component.

---

## 🚀 Local Development

```bash
npm install
npm run dev        # start dev server at http://localhost:5173
npm run build      # production build → dist/
```

---

## 🌐 Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` then pushes `dist/` to the `gh-pages` branch automatically.
Your site will be live at: **https://luankunlun.github.io/Profile_1/**

> **First deploy only:** GitHub Pages needs ~2 minutes to build after the first push.

---

## ✏️ How to Update Content

### Change personal info / tagline
Edit `src/data.ts` → `personalInfo` object.

### Add / edit work experience
Edit `src/data.ts` → `experiences` array. Each item has:
- `company`, `role`, `period`, `location`
- `achievements` — array of bullet strings

### Add / edit projects
Edit `src/data.ts` → `projects` array. Each item has:
- `title`, `category`, `description`
- `metrics` — array of `{ label, value }` pairs (shown as stat cards)
- `tags` — array of tag strings

### Add / edit skills
Edit `src/data.ts` → `skillCategories` array. Each item has:
- `name` — category name
- `skills` — array of skill chip labels
- `level` — number 0–100 (drives the progress bar)

### Change education / certifications
Edit `src/components/About.tsx` — `certifications` array at the top,
and `src/data.ts` → `education` array.

---

## 🎨 Theme & Style

- **Dark mode default** — toggle in the navbar
- Colors: Indigo / Purple / Pink gradient palette
- To change accent colors: search for `indigo` in `src/components/` and replace with any Tailwind color

---

## 🌍 Custom Domain (GitHub Pages)

1. Buy a domain (e.g. `johndoe.dev`) from Namecheap / Google Domains / Cloudflare
2. In your domain registrar's DNS settings, add:
   ```
   Type  Name   Value
   A     @      185.199.108.153
   A     @      185.199.109.153
   A     @      185.199.110.153
   A     @      185.199.111.153
   CNAME www    luankunlun.github.io
   ```
3. In GitHub → Repo Settings → Pages → Custom domain: enter your domain
4. Tick "Enforce HTTPS"
5. Update `vite.config.ts` → `base: '/'` (remove `/Profile_1/`)
6. Update `package.json` → `"homepage": "https://yourdomain.com"`
7. Run `npm run deploy` again

DNS propagation takes 10–60 minutes.

---

## 📁 Project Structure

```
Profile_1/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       ← sticky nav, dark/light toggle
│   │   ├── Hero.tsx         ← animated typewriter hero
│   │   ├── About.tsx        ← summary, education, certifications
│   │   ├── Experience.tsx   ← vertical timeline
│   │   ├── Projects.tsx     ← filterable card wall
│   │   ├── Skills.tsx       ← SVG radar chart + progress bars
│   │   └── Contact.tsx      ← contact form
│   ├── data.ts              ← ★ ALL CONTENT LIVES HERE ★
│   ├── types.ts             ← TypeScript interfaces
│   ├── App.tsx              ← root component + theme toggle
│   └── main.tsx             ← entry point
├── public/
│   └── favicon.svg
├── .github/
│   └── workflows/           ← (add deploy.yml here with `workflow` scope token)
├── index.html
├── vite.config.ts
└── package.json
```

---

## ⚡ Auto-Deploy with GitHub Actions

To enable automatic deployment on every push to `main`, you need a token with `workflow` scope:

1. Go to https://github.com/settings/tokens/new
2. Select scopes: `repo` + `workflow`
3. Add `.github/workflows/deploy.yml` (already written in this repo's history)
4. Push — it will auto-deploy on every `git push`

---

Built with ❤️ using React · Vite · TypeScript · Tailwind CSS · Lucide Icons
