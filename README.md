# Listify - Todo App

A beautiful todo application built with Remix, MongoDB, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+ recommended)
- Docker and Docker Compose
- Git

### Setup Instructions

1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd cursor-listify
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start MongoDB with Docker**
   ```sh
   docker compose up -d
   ```
   
   This will start a MongoDB container with:
   - **Port**: 27017
   - **Username**: admin
   - **Password**: password
   - **Database**: listify

4. **Set up environment variables**
   ```sh
   cp .env.example .env
   ```
   
   The `.env` file contains:
   ```
   DATABASE_URL="mongodb://admin:password@localhost:27017/listify?authSource=admin"
   NODE_ENV=development
   PORT=3000
   SESSION_SECRET="your-secret-key-change-in-production"
   ```

5. **Start the development server**
   ```sh
   npm run dev
   ```

6. **Verify everything works**
   - App: http://localhost:5173 (or another port if 5173 is busy)
   - Health Check: http://localhost:5173/api/health

## 🐳 Docker Commands

```sh
# Start MongoDB container
docker compose up -d

# Stop MongoDB container
docker compose down

# View container logs
docker compose logs mongodb

# Access MongoDB shell
docker exec -it listify-mongodb mongosh -u admin -p password --authenticationDatabase admin
```

## 📁 Project Structure

```
app/
├── lib/
│   ├── db.server.ts          # Database connection utility
│   └── models/
│       └── task.server.ts    # Task model and operations
├── routes/
│   ├── _index.tsx           # Main dashboard
│   └── api.health.ts        # Health check endpoint
└── ...
```

## 🎨 Design System

This project uses a custom Tailwind CSS configuration with:
- **Poppins** font family
- Custom color palette matching the Figma design
- Responsive breakpoints
- Design tokens for consistency

## 🔧 Development

```sh
# Run the dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run typecheck

# Linting
npm run lint
```

## 🌟 Features

- ✅ Remix with TypeScript
- ✅ MongoDB with Docker
- ✅ Tailwind CSS with custom design system
- ✅ Health monitoring
- 🚧 Task management (coming soon)
- 🚧 User authentication (coming soon)
- 🚧 Real-time updates (coming soon)

## 📝 API Endpoints

- `GET /api/health` - Application health check

---

**Happy coding! 🎯**
