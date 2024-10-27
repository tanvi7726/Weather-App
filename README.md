# Weather Monitoring App

A React-based weather monitoring application that fetches, processes, and visualizes weather data in real-time. The app displays current weather conditions and forecasts, along with alerts for temperature thresholds.

## Features

- Displays current weather conditions for selected metros in India.
- Provides a 7-day weather forecast.
- Visualizes weather data through interactive charts.
- Users can set temperature thresholds to receive email alerts.
- Responsive design for both desktop and mobile users.

## Technologies Used

- **Frontend**: React, TypeScript, Next.js, Chart.js
- **Backend**: OpenWeatherMap API for fetching weather data
- **Email Service**: EmailJS for sending email notifications
- **Styling**: CSS modules, Tailwind CSS

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tanvi7726/Weather-App.git

2. Navigate to the project directory:
   ```bash
   cd Weather-App

3. Install the dependencies:
    ```bash
    npm install
    
4. Set up environment variables:
    
    Create a .env.local file in the root directory and add your environment variables:
    ````makefile
    NEXT_PUBLIC_API_KEY=your_openweathermap_api_key
    EMAILJS_USER_ID=your_emailjs_user_id
    EMAILJS_SERVICE_ID=your_emailjs_service_id
    EMAILJS_TEMPLATE_ID=your_emailjs_template_id
    
5. Start the development server:

    ```bash
    npm run dev

## Screenshots of the working Project:
![1](https://github.com/user-attachments/assets/bc1dd794-1647-4134-8fa9-f57d1a57b1ff)
![2](https://github.com/user-attachments/assets/5b757287-f026-4462-a190-d748f2ec93c7)
![3](https://github.com/user-attachments/assets/062ed922-12d6-43f9-bbc3-668927d902b1)
