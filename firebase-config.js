import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJ3G_lwex_XxrCcim8f1Th1oypKPYelqE",
  authDomain: "giaythethao-567.firebaseapp.com",
  projectId: "giaythethao-567",
  storageBucket: "giaythethao-567.firebasestorage.app",
  messagingSenderId: "1057283246798",
  appId: "1:1057283246798:web:4e0b6531ed51413b02de9f",
  measurementId: "G-E971JCB4JP"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Xuất các biến này ra để các file HTML khác có thể import sử dụng
export { db, auth };