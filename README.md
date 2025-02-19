## Setup Instructions

1. **Unzip and Open:**
   - Extract the project files from the provided archive.
   - Open the project folder in your preferred code editor.

2. **Environment Configuration:**
   - **Client (codingJudge) Configuration:**
     - Navigate to the `codingJudge` folder.
     - Create a file named `.env.local` in the root of the `codingJudge` folder.
     - Paste the following Firebase configuration into `.env.local`, replacing the placeholders with your actual values:

     ```
     VITE_apiKey=YOUR_API_KEY
     VITE_authDomain=YOUR_PROJECT_[ID.firebaseapp.com](https://www.google.com/search?q=ID.firebaseapp.com)
     VITE_projectId=YOUR_PROJECT_ID
     VITE_storageBucket=YOUR_PROJECT_ID.firebasestorage.app
     VITE_messagingSenderId=YOUR_MESSAGING_SENDER_ID
     VITE_appId=YOUR_APP_ID
     VITE_measurementId=YOUR_MEASUREMENT_ID
     VITE_IMAGE_HOSTING_KEY=YOUR_IMAGE_HOSTING_KEY
     ```
     Such as:
     ```
     VITE_apiKey=AIzaSyDare_tQIPVggwA5VHqhTgPgg9T94JqHxQ
     VITE_authDomain=programming-contest-20813.firebaseapp.com
     VITE_projectId=programming-contest-20813
     VITE_storageBucket=programming-contest-20813.firebasestorage.app
     VITE_messagingSenderId=396842534263
     VITE_appId=1:396842534263:web:e713856470475a30be0d72
     VITE_measurementId=G-2WJDLDBJ4T

     VITE_IMAGE_HOSTING_KEY=d57dbe78993496b300e91cb9604d6b9a
     ```

   - **Server (codingJudgeServer) Configuration:**
     - Navigate to the `codingJudgeServer` folder.
     - Create a file named `.env` in the root of the `codingJudgeServer` folder.
     - Paste the following database and server configuration into `.env`, replacing the placeholders with your actual values:

     ```
     DB_USER=YOUR_DB_USER
     DB_PASS=YOUR_DB_PASS
     PORT=5000
     ACCESS_TOKEN_SECRET=YOUR_ACCESS_TOKEN_SECRET
     ```
     Such as:
     ```
     DB_USER=mernnextdeveloper
     DB_PASS=Djid8N8XNn1X0991
     PORT=5000
     ACCESS_TOKEN_SECRET=53d026375b8325004f59743a137dc938515d1ae44d62a552183b07019683d74c1f8688b08ae0c1d994f249d8e857e185cf65c9d794332af945c9cbd10d582e98
     ```

3. **Client (codingJudge) Setup:**
   - Open a terminal in your code editor.
   - Navigate to the `codingJudge` folder using the command: `cd codingJudge`
   - Install the project dependencies by running: `npm i`
   - Start the development server by running: `npm run dev`
   - This will provide a local development link (e.g., `http://localhost:5173/`). Open this link in your browser to access the client application.

4. **Server (codingJudgeServer) Setup:**
   - Open a new terminal in your code editor.
   - Navigate to the `codingJudgeServer` folder using the command: `cd codingJudgeServer`
   - Install the project dependencies by running: `npm i`
   - Start the server by running: `npm start`
   - The server will be running on port 5000 (http://localhost:5000).
- **Moving between folders in the terminal:** Use the command `cd folderName` to navigate to a specific folder.
