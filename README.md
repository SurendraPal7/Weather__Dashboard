# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# 🌤 Weather Dashboard Web App  

A *React.js-based Weather Dashboard that provides real-time weather updates for any city, including a **5-day forecast, using the **OpenWeatherMap API*.  

## 🚀 Features  
✅ *Real-time Weather Data*: Displays temperature, humidity, wind speed, and weather conditions.  
✅ *5-Day Forecast*: Shows daily temperature, humidity, wind speed, and weather icons.  
✅ *Search Functionality*: Fetch weather details for any city.  
✅ *Default Location Support*: Automatically detects and displays weather for the user's current location.  
✅ *Recent Searches*: Stores the last five searched cities for quick access.  
✅ *Error Handling & Loading States*: Displays loading indicators and manages invalid inputs.  
✅ *Responsive UI: Built with **Tailwind CSS* for a mobile-friendly experience.  

---

## 🛠 Tech Stack  
- *Frontend*: React.js, Tailwind CSS  
- *API*: OpenWeatherMap API (Current & Forecast Data)  
- *State Management*: React Hooks (useState, useEffect)  
- *HTTP Requests*: Axios  

---

## 🔧 Setup Instructions  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
⿢ Install Dependencies

npm install

⿣ Get Your OpenWeatherMap API Key

Sign up at OpenWeatherMap

Generate an API key

Create a .env file in the root directory and add:

REACT_APP_WEATHER_API_KEY=your_api_key_here


⿤ Run the Application

npm start

The app will run on http://localhost:3000


---

🌍 API Integration

OpenWeatherMap API

Current Weather API: Fetches real-time weather for any city.
Endpoint:

https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric


5-Day Forecast API: Fetches 5-day forecast data at 3-hour intervals.

Endpoint:

https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric


Rate Limits:

Free tier allows 60 requests per minute
🎯 Contributing

Feel free to fork the repo, create a pull request, or open an issue for suggestions!


---
This *README.md* provides a clear *overview, setup guide, API details, and future enhancements* for your GitHub repository. Let me know if you need modifications! 🚀



