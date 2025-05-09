🚀 URL Shortener – How to Use & Features

This is a full-featured URL Shortener built using Node.js, Express, MongoDB, and manual session-based authentication. Here's everything you need to know to use it.



✅ Prerequisites

  ✅ Node.js installed
  ✅ MongoDB installed & running (default port or custom string)
  ✅ No need to run `npm install` – `node_modules` is included in the repository
  ✅ Nodemon is already configured


🔧 Setup & Run the Project

1. Start MongoDB
   Make sure your MongoDB shell or service is running.
   Default connection string:
   mongodb://127.0.0.1:27017/short-url
   You can change it in `index.js` if needed.

2. Start the Server
   Use this command:
   npm run dev
 This starts the server using `nodemon` (auto-restarts on code changes).


🔐 Authentication Features
  📝 Signup
  Create an account with your email, name, and password.
  🔑 Login
  On successful login, a sessionId is generated and stored in cookies.
  🚪 Logout
  Clears the session from the database and removes the session cookie.



🔗 URL Shortening Features
✨ 1. Shorten a URL
      Logged-in users can enter a long URL.
      A unique **short ID** is generated using `nanoid`.
      The short URL is saved in the database.

👀 2. View All Your Shortened URLs
      Users can fetch and view **all the URLs** they’ve shortened.
      Each URL object includes:

        * Original `redirectURL`
        * `shortId`
        * Visit count (based on history)
        * Creation timestamp

📊 3. Track URL Visits (Analytics)
   Each time someone visits a short URL:
   A timestamp is saved in the `visitHistory` array.
   You can calculate total visits and track time-based analytics.


📁 Folder Contains

| File/Folder            | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `node_modules/`        | Already included, so no `npm install` needed    |
| `index.js` or `app.js` | Main entry point – contains DB and server logic |
| `models/`              | Contains `User` and `URL` schemas               |
| `routes/`              | Authentication and URL routes                   |
| `middleware/`          | Auth middleware for session validation          |


🧪 Test Workflow

1. Signup a user
2. Login to get a session
3. Shorten a URL
4. Visit the short URL to increase visit count
5. Fetch all URLs created by your user
6. Logout to clear session
