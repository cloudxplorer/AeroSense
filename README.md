# AeroSense
The AeroSense is a responsive web application that provides real-time air quality information for cities worldwide. It displays the Air Quality Index (AQI) along with detailed pollutant concentrations in interactive visualizations powered by Chart.js.

## Description
This AeroSense allows users to monitor the air quality of any city in real-time. Using data from the World Air Quality Index (WAQI) API, the app shows the AQI value, category, and a bar chart of major pollutants (PM2.5, PM10, O₃, NO₂, SO₂, CO). The application features a sleek, gradient-themed design with responsive layouts for mobile and desktop.  

It also provides a guide for AQI categories, making it easy for users to understand the health implications of current air quality. The interactive chart gives a clear visual representation of pollutant concentrations.

## Features
- Search for any city worldwide to view AQI data.  
- Display AQI value with dynamic gradient animation.  
- Show AQI category with color-coded labels.  
- Interactive bar chart of major pollutants (PM2.5, PM10, O₃, NO₂, SO₂, CO) using Chart.js.  
- Responsive design compatible with mobile, tablet, and desktop devices.  
- Enter key support for city search input.  
- Error handling for invalid city names or API limits.  
- Gradient and glassmorphism-inspired UI for modern aesthetics.  
- Footer with data source acknowledgment and branding.

## How It Works
1. The user enters a city name in the search input and clicks "Search City" or presses Enter.  
2. The app fetches AQI data from the WAQI API using fetch.  
3. If valid data is received, the AQI card is displayed with:  
   - City name and last updated time  
   - AQI value and color-coded category  
   - Interactive pollutant chart  
4. The pollutant chart shows concentrations of PM2.5, PM10, O₃, NO₂, SO₂, and CO.  
5. If the city is invalid or API limit is reached, an alert is shown.

## Functions
- **fetchCityData(city)**: Fetches AQI and pollutant data for the entered city from the WAQI API.  
- **showAQIData(data)**: Displays the AQI card, updates city info, AQI value, category, and renders the pollutant chart.  
- **aqiCategory(aqi)**: Determines AQI category label and color based on the AQI value.  
- **Event Listeners**: Handle click on search button and Enter key press to trigger city search.

## Installation & Usage
- git clone https://github.com/cloudxplorer/AeroSense
- cd AeroSense
- python -m http.server 4444
  
Now go to your Browser
- http://localhost:4444
- **DEMO**:- [AeroSense](https://cloudxplorer.github.io/AeroSense/)

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6)  
- **CSS Framework**: Tailwind CSS  
- **Charts**: Chart.js (interactive pollutant bar chart)  
- **API**: [World Air Quality Index (WAQI) API](https://aqicn.org/api/)  
- **Fonts**: Google Fonts (Inter)  
- **Design Features**:  
  - Gradient backgrounds and animated AQI value  
  - Glassmorphism-inspired cards  
  - Responsive layout for all devices
 
## License
This project is licensed under the MIT License.  
