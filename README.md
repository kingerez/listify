## 🚀 Deployment with Vercel

This application can be deployed to Vercel for production hosting. We've included a `vercel.json` configuration to handle both static assets and server functions.

### 1. Build for Production

```bash
npm run build
```

### 2. Deploy to Vercel

```bash
npx vercel --prod
```

Follow the prompts and set the following environment variables in your Vercel project:

- `MONGODB_URI`: MongoDB connection string (e.g., `mongodb+srv://...`)
- `SESSION_SECRET`: Your session encryption secret

You can add these via the CLI:

```bash
npx vercel env add MONGODB_URI production
npx vercel env add SESSION_SECRET production
```

### 3. Local Development with Vercel CLI (Optional)

```bash
npx vercel dev
```

This will run the Remix dev server along with any Vercel function mocks.

For more advanced usage, see [Vercel Docs](https://vercel.com/docs) and [Remix on Vercel](https://remix.run/docs/en/v2/guides/deployment/vercel).

---

# Listify - Task Management Dashboard

A modern task management dashboard built with Remix, TypeScript, and MongoDB.

## 🚀 Features

- **Modern UI**: Clean, responsive interface built with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **MongoDB**: Robust data storage with Mongoose ODM
- **Real-time**: Live updates and statistics
- **Component-based**: Modular, reusable UI components

## 🛠️ Tech Stack

- **Frontend**: Remix, React, TypeScript, Tailwind CSS
- **Backend**: Remix API routes, Node.js
- **Database**: MongoDB with Mongoose
- **Icons**: react-icons library
- **Development**: Vite, ESLint

## 📋 Prerequisites

- Node.js 20.0.0 or higher
- Docker (for MongoDB)
- npm or yarn

## 🏃‍♂️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up MongoDB with Docker

Start the MongoDB container using Docker Compose:

```bash
docker compose up -d
```

This will start:
- **MongoDB** on port `27017` 
- **Mongo Express** (Web UI) on port `8081`

**Access MongoDB:**
- **Database**: `mongodb://localhost:27017/listify`
- **Web UI**: [http://localhost:8081](http://localhost:8081)

**Stop the containers:**
```bash
docker compose down
```

**View logs:**
```bash
docker compose logs mongodb
```

**Test database connection:**
```bash
curl http://localhost:5173/api/db-test
```

### 3. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see your application.

## 📁 Project Structure

```
app/
├── components/          # Reusable UI components
├── routes/             # Remix routes and API endpoints
├── utils/              # Utility functions and helpers
├── styles/             # Global styles and CSS
└── entry.client.tsx    # Client entry point
└── entry.server.tsx    # Server entry point
└── root.tsx           # Root layout component
```

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 🤝 Contributing

This project follows standard development practices. Please ensure all code passes linting and type checking before submitting.

## 📄 License

This project is for demonstration purposes.
