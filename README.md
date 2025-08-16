<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2.3-black?style=for-the-badge&logo=nextdotjs" />
  <img src="https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react" />
  <h1>🍴 Next.js Restaurant Demo App</h1>
  <p><em>A playful demo showing React & Next.js core concepts with a restaurant analogy</em></p>
</div>

---

## 🚀 Features

- **React State (`useState`)** → add plates like counting orders
- **Context API** → shared salt shaker across all pages
- **SSR (Server Side Rendering)** → dish cooked fresh per request
- **SSG (Static Site Generation)** → buffet dishes pre-cooked
- **ISR (Incremental Static Regeneration)** → buffet refills every few minutes
- **Dynamic Routing** → `/menu/[dish]` shows any dish dynamically
- **API Routes** → secret recipe counter returning JSON

---

## 📂 Project Structure

```
my-app/
 ├─ context/
 │   └─ UserContext.js
 ├─ pages/
 │   ├─ _app.js
 │   ├─ index.js
 │   ├─ about.js
 │   ├─ server.js
 │   ├─ static.js
 │   ├─ menu/
 │   │   └─ [dish].js
 │   └─ api/
 │       └─ hello.js
 └─ package.json
```

---

## 🌐 Routes

- `/` → Home (React state + Context)
- `/about` → About (Context + SSG props)
- `/server` → SSR example
- `/static` → SSG example
- `/menu/[dish]` → Dynamic route (`/menu/pizza`, `/menu/paneer`, etc.)
- `/api/hello` → API route returning JSON

---

## 🛠️ Setup & Run

```bash
# 1. Create project
npx create-next-app my-app

# 2. Move into folder
cd my-app

# 3. Install dependencies
npm install

# 4. Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) or your LAN IP (e.g. `http://192.168.1.42:3000`).

---

## 📖 Restaurant Analogy

- **Component** → dish on the menu
- **Props** → ingredients passed to the chef
- **State** → current taste of the dish
- **Context** → salt shaker shared on every table
- **SSR** → cooked fresh when ordered
- **SSG** → pre-cooked buffet
- **ISR** → buffet refilled after some time
- **Dynamic Routes** → order any dish by name `/menu/[dish]`

---

## 🎨 Logo & Badges

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge" />
</p>

---

## 📩 Contact

| Name              | Details                             |
|-------------------|-------------------------------------|
| **👨‍💻 Developer**  | Sachin Arora                      |
| **📧 Email**       | [sachnaror@gmail.com](mailto:sachnaror@gmail.com) |
| **📍 Location**    | Noida, India                       |
| **📂 GitHub**      | [github.com/sachnaror](https://github.com/sachnaror) |
| **🌐 Website**     | [about.me/sachin-arora](https://about.me/sachin-arora) |
| **📱 Phone**       | [+91 9560330483](tel:+919560330483) |
