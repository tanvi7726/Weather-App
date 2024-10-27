// ForecastChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2'; // Assuming you are using Chart.js for charts
import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  CategoryScale, // Import CategoryScale
  ChartOptions,   // Import ChartOptions for type
} from 'chart.js'; // Import required Chart.js components

// Register the components
ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  CategoryScale // Register CategoryScale
);

// Define the type for your forecast data
interface ForecastData {
  dt: number;         // UNIX timestamp
  date: string;       // Formatted date string (e.g., "YYYY-MM-DD")
  temperature: number; // Current temperature
  feels_like: number; // Feels like temperature
  humidity: number;   // Humidity percentage
}

interface ForecastChartProps {
  forecastData: ForecastData[];
}

const ForecastChart: React.FC<ForecastChartProps> = ({ forecastData }) => {
  // Prepare the data for the chart
  const chartData = {
    labels: forecastData.map(d => d.date), // Dates on the X-axis
    datasets: [
      {
        label: 'Temperature (°C)',
        data: forecastData.map(d => convertKelvinToCelsius(d.temperature)),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Feels Like (°C)',
        data: forecastData.map(d => convertKelvinToCelsius(d.feels_like)),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Humidity (%)',
        data: forecastData.map(d => d.humidity),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  // Correctly typed options
  const options: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        type: 'category', // Set x-axis to category type
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Values',
        },
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ForecastChart;
