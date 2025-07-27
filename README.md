# Node Project - TypeScript Nest.js with TypeORM

A modern TypeScript backend application built with Nest.js and TypeORM.

## 🚀 Features

- **TypeScript** - Full TypeScript support with strict type checking
- **Nest.js** - Progressive Node.js framework for building scalable server-side applications
- **TypeORM** - Object-Relational Mapping for TypeScript and JavaScript
- **SQLite** - Lightweight database (can be easily changed to MySQL, PostgreSQL, etc.)
- **Hot Reload** - Development server with automatic reloading
- **CORS Enabled** - Cross-origin resource sharing enabled
- **API Prefix** - All routes prefixed with `/api`

## 📋 Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd node-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run start:dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── entities/          # TypeORM entities
│   └── user.entity.ts # Sample User entity
├── app.controller.ts  # Main application controller
├── app.service.ts     # Main application service
├── app.module.ts      # Main application module
└── main.ts           # Application entry point
```

## 🎯 Available Scripts

- `npm run build` - Build the application
- `npm run start` - Start the application
- `npm run start:dev` - Start the application in development mode with hot reload
- `npm run start:debug` - Start the application in debug mode
- `npm run start:prod` - Start the application in production mode
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:cov` - Run tests with coverage
- `npm run lint` - Run ESLint

## 🌐 API Endpoints

- `GET /api/` - Welcome message
- `GET /api/health` - Health check endpoint

## 🗄️ Database Configuration

The project is configured to use SQLite by default. You can easily change the database configuration in `src/app.module.ts`:

```typescript
TypeOrmModule.forRoot({
  type: 'postgres', // or 'mysql', 'mariadb', 'sqlite', 'oracle', 'mssql'
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Set to false in production
})
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
DATABASE_URL=your_database_url
```

## 📝 Adding New Entities

1. Create a new entity file in `src/entities/`
2. Import and add it to the TypeORM configuration in `app.module.ts`
3. Create corresponding service and controller files

## 🧪 Testing

The project includes Jest for testing. Run tests with:

```bash
npm run test
```

## 📦 Production Build

To build for production:

```bash
npm run build
npm run start:prod
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the ISC License.