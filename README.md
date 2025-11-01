# 📱 Todo App - Full Stack Application

A modern, full-stack Todo application built with React Native and Node.js. Manage your tasks with authentication, priorities, deadlines, and more.

## ✨ Features

- 🔐 **User Authentication** - Secure login and registration with JWT tokens
- ✅ **Task Management** - Create, read, update, and delete tasks
- 📅 **Date & Time Management** - Schedule tasks with specific dates and deadlines
- 🎯 **Priority Levels** - Organize tasks by priority (low, medium, high)
- 🔄 **Task Completion** - Mark tasks as completed/incomplete
- 📱 **Cross-Platform** - Works on both iOS and Android
- 💾 **Persistent Storage** - Data stored in MongoDB

## 🛠️ Tech Stack

### Frontend
- **React Native** (0.82.1) - Mobile app framework
- **TypeScript** - Type-safe JavaScript
- **React** (19.1.1) - UI library
- **React Native Safe Area Context** - Safe area handling

### Backend
- **Node.js** - Runtime environment
- **Express.js** (5.1.0) - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **React Native development environment**
  - For Android: Android Studio with Android SDK
  - For iOS: Xcode (macOS only)
- **Git**

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/epiitom/Todo-assignment.git
cd Todo-assignment
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Create a .env file
# Copy and configure environment variables
cp .env.example .env  # Create this file if needed
```

**Environment Variables (.env):**
```env
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your-secret-key-here
PORT=3000
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd ../Todo

# Install dependencies
npm install

# For iOS only (macOS required)
cd ios
pod install
cd ..
```

### 4. Configure API URL

Update the API URL in `Todo/utils/api.ts` to point to your backend:

- **Android Emulator**: Uses `http://10.0.2.2:3000/api` (default)
- **iOS Simulator**: Uses `http://localhost:3000/api` (default)
- **Physical Device**: Set `MANUAL_HOST` to your computer's IP address
  - Example: `http://192.168.1.73:3000`

```typescript
// Todo/utils/api.ts
const MANUAL_HOST: string = 'http://YOUR_IP_ADDRESS:3000';
```

## 🏃 Running the Application

### Start MongoDB

Make sure MongoDB is running:

```bash
# On macOS/Linux
mongod

# On Windows
# Start MongoDB service or run mongod.exe
```

### Start the Backend Server

```bash
cd Backend
npm start
# or
node index.js
```

The backend server will run on `http://localhost:3000`

### Start the Frontend App

Open a new terminal window:

```bash
cd Todo

# Start Metro bundler
npm start

# In another terminal, run on Android
npm run android

# Or run on iOS (macOS only)
npm run ios
```

## 📁 Project Structure

```
Todo-assignment/
├── Backend/                 # Node.js backend server
│   ├── db/                  # Database files
│   ├── index.js             # Main server file
│   ├── package.json         # Backend dependencies
│   └── .env                 # Environment variables
│
├── Todo/                    # React Native frontend
│   ├── screens/             # App screens
│   │   ├── AuthScreen.tsx   # Login/Register screen
│   │   ├── HomeScreen.tsx   # Home screen
│   │   └── TodoScreen.tsx   # Todo list screen
│   ├── components/          # Reusable components
│   │   ├── TodoItem.tsx     # Todo item component
│   │   └── TodoList.tsx     # Todo list component
│   ├── utils/               # Utility functions
│   │   └── api.ts           # API configuration
│   ├── App.tsx              # Main app component
│   └── package.json         # Frontend dependencies
│
└── README.md                # This file
```

## 🔌 API Endpoints

### Authentication

- `POST /api/register` - Register a new user
  - Body: `{ email, password }`
  
- `POST /api/login` - Login user
  - Body: `{ email, password }`
  - Returns: `{ token, user }`

### Tasks

All task endpoints require authentication (Bearer token in Authorization header).

- `GET /api/tasks` - Get all tasks for authenticated user
- `POST /api/tasks` - Create a new task
  - Body: `{ title, description, dateTime, deadline, priority }`
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task
- `PATCH /api/tasks/:id/complete` - Toggle task completion status

## 🧪 Testing

Run tests for the frontend:

```bash
cd Todo
npm test
```

## 📱 Development Tips

### Hot Reload
- Press `R` twice in the emulator/simulator to reload
- Shake device or press `Ctrl+M` (Android) / `Cmd+D` (iOS) for dev menu

### Debugging
- Use React Native Debugger or Chrome DevTools
- Check Metro bundler console for errors
- Use `console.log()` for debugging (visible in Metro console)

### Physical Device Testing
1. Ensure phone and computer are on the same Wi-Fi network
2. Find your computer's IP address:
   - Windows: `ipconfig` → IPv4 Address
   - macOS/Linux: `ifconfig` or `ip addr`
3. Update `MANUAL_HOST` in `Todo/utils/api.ts`
4. Start backend server
5. Run the app on your device

## 🔒 Security Notes

- Passwords are hashed using bcryptjs
- JWT tokens are used for authentication
- CORS is enabled for cross-origin requests
- Environment variables should not be committed to git

## 🐛 Troubleshooting

### Metro Bundler Issues
```bash
# Clear cache and restart
npm start -- --reset-cache
```

### Android Build Issues
```bash
# Clean build
cd android
./gradlew clean
cd ..
npm run android
```

### iOS Build Issues
```bash
cd ios
pod install
cd ..
npm run ios
```

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify network access if using MongoDB Atlas

## 📝 Available Scripts

### Backend
```bash
npm start          # Start the server
```

### Frontend
```bash
npm start          # Start Metro bundler
npm run android    # Run on Android
npm run ios        # Run on iOS
npm test           # Run tests
npm run lint       # Lint code
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👤 Author

**Prathmesh**

## 🙏 Acknowledgments

- React Native community
- Express.js team
- MongoDB documentation

---

⭐ If you found this project helpful, please consider giving it a star!

