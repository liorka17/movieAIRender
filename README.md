# 🎬 Movie AI - מערכת המלצות סרטים מבוססת AI

פרויקט `Movie AI` הוא מערכת חכמה להמלצות סרטים, המבוססת על דירוגי המשתמשים ומנתחת נתונים באמצעות **Gemini AI**.  
המערכת משתמשת ב- **TMDB API** לצורך שליפת פרטי סרטים ומנוע **Gemini AI** לצורך חיזוי והמלצה על סרטים נוספים.

---

## 🚀 **תוכן עניינים**
- [📌 תכונות הפרויקט](#-תכונות-הפרויקט)
- [🛠️ טכנולוגיות בשימוש](#️-טכנולוגיות-בשימוש)
- [📦 התקנה והפעלה](#-התקנה-והפעלה)
- [🔑 קובץ סביבה (.env)](#-קובץ-סביבה-env)
- [📁 מבנה הפרויקט](#-מבנה-הפרויקט)
- [🎯 API Routes](#-api-routes)
- [📷 צילומי מסך](#-צילומי-מסך)

---

## 📌 **תכונות הפרויקט**
✔️ **חיפוש סרטים** – ניתן לחפש סרטים בעברית ובאנגלית.  
✔️ **דירוג סרטים** – כל משתמש יכול לדרג סרטים, מה שמאפשר התאמה אישית להמלצות.  
✔️ **המלצות מבוססות AI** – המלצות הסרטים מבוססות על הדירוגים האישיים שלך באמצעות **Gemini AI**.  
✔️ **אינטגרציה עם TMDB API** – שליפת מידע אמיתי על הסרטים (תמונות, תיאורים, טריילרים וכו').  
✔️ **ממשק מודרני** – עיצוב כהה ואלמנטים ויזואליים שמעניקים חווית משתמש חלקה ונעימה.  

---

## 🛠️ **טכנולוגיות בשימוש**
- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** HTML, CSS, JavaScript, EJS
- **Database:** MongoDB עם Mongoose ORM
- **AI Integration:** Google Gemini AI
- **External APIs:** The Movie Database (TMDB API)
- **Authentication:** JSON Web Token (JWT)
- **Styling:** Tailwind CSS / Custom CSS

---

## 📦 **התקנה והפעלה**
1. **שכפול הריפו**
   ```bash
   git clone https://github.com/username/movie-ai.git
   cd movie-ai

npm install

הגדרת משתני סביבה
PORT=5000
MONGO_URI=your_mongodb_connection_string
TMDB_API_KEY=your_tmdb_api_key
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret


👨‍💻 ליאור קלנדרוב – יוצר הפרויקט
🎨 עיצוב וממשק – ליאור קלנדרוב



