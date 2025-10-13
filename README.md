# 📝 SurveyEx

Μια σύγχρονη εφαρμογή για δημιουργία και διαχείριση **surveys** με Node.js και MongoDB.  
Ιδανική για συλλογή δεδομένων, ανάλυση απαντήσεων και εύκολη διαχείριση ερευνών.

---

## 🚀 Features

- Δημιουργία, επεξεργασία και διαγραφή surveys  
- Προσθήκη ερωτήσεων με επιλογές και απαντήσεις  
- Αποθήκευση δεδομένων σε MongoDB  
- REST API endpoints για εύκολη αλληλεπίδραση με το frontend  
- Responsive και απλό interface με HTML/CSS/JS  

---

## 💻 Installation

1. Κλωνοποίηση του repository:

```bash
git clone https://github.com/username/surveyex.git
cd surveyex
```
2. Εγκατάσταση dependencies:
```bash
npm install
```
3. Ρύθμιση .env:
```ini
PORT=3000
MONGO_URI=your_mongodb_connection_string
```
4. Τρέξε την εφαρμογή:
```bash
npm run dev
```
5. Πρόσβαση στην εφαρμογή μέσω browser:
```bash
http://localhost:3000/api/surveys
```
## 📦 Project Structure
```
surveyex-master/
├─ server.js           # Κύριο αρχείο server
├─ survey/
│  ├─ controllers/     # Λογική ελέγχου των surveys
│  ├─ models/          # MongoDB models
│  ├─ routes/          # API routes
│  ├─ public/          # Frontend αρχεία (HTML, CSS, JS)
│  └─ data/            # Προαιρετικά αρχεία δεδομένων
├─ package.json        # Node dependencies και scripts
└─ README.md           # Οδηγίες project
```
## 🔧 API Endpoints

- GET /api/surveys – Λίστα όλων των surveys

- POST /api/surveys – Δημιουργία νέου survey

- GET /api/surveys/:id – Λήψη ενός συγκεκριμένου survey

- PUT /api/surveys/:id – Ενημέρωση survey

- DELETE /api/surveys/:id – Διαγραφή survey

## 🌟 Contributing

Καλωσορίζονται προτάσεις και βελτιώσεις!

1. Κάνε fork του repo

2. Δημιούργησε ένα νέο branch (git checkout -b feature/όνομα)

3. Κάνε commit τις αλλαγές σου (git commit -m "Περιγραφή")

4. Σπρώξε το branch (git push origin feature/όνομα)

5. Άνοιξε ένα Pull Request

## 📜 License

MIT License © 2025
