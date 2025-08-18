task-manager-api/
│── node_modules/
│── src/
│   │── config/              # Configuration files (db, env, etc.)
│   │   └── db.js
│   │
│   │── controllers/         # Handle request logic
│   │   └── taskController.js
│   │   └── userController.js
│   │
│   │── models/              # Database models (Mongoose/Prisma/Sequelize)
│   │   └── Task.js
│   │   └── User.js
│   │
│   │── routes/              # Route definitions
│   │   └── taskRoutes.js
│   │   └── userRoutes.js
│   │
│   │── middleware/          # Custom middleware (auth, error handling)
│   │   └── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   │── utils/               # Helper functions (e.g., JWT, validators)
│   │   └── generateToken.js
│   │
│   │── app.js               # Express app setup
│   └── server.js            # Entry point (starts server)
│
│── .env                     # Environment variables (DB_URI, JWT_SECRET)
│── package.json
│── README.md