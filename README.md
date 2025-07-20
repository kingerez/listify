# Listify - Task Management App

A modern task management application built with Remix, MongoDB, and TypeScript.

- 📖 [Remix docs](https://remix.run/docs)

## Prerequisites

- Node.js (>=20.0.0)
- Docker and Docker Compose
- npm or yarn

## Database Setup

This project uses MongoDB running in a Docker container for local development.

### Start the Database

```sh
# Start MongoDB container
docker-compose up -d

# Verify the container is running
docker ps
```

The MongoDB container will:
- Run on port 27017
- Initialize with sample data
- Create a database named 'listify'
- Set up admin user (username: admin, password: password123)

### Stop the Database

```sh
# Stop the container
docker-compose down

# Stop and remove all data (fresh start)
docker-compose down -v
```

## Development

1. **Start the database:**
   ```sh
   docker-compose up -d
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the dev server:**
   ```sh
   npm run dev
   ```

The app will be available at `http://localhost:5173` (or the next available port).

## Environment Variables

Copy `.env` to configure your environment:

- `MONGODB_URI`: MongoDB connection string
- `NODE_ENV`: Application environment (development/production)

## Database Connection

The app connects to MongoDB using the connection string in `.env`:
```
MONGODB_URI=mongodb://admin:password123@localhost:27017/listify?authSource=admin
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
