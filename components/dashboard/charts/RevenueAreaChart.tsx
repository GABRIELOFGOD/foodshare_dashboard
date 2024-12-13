import { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { RevenueBoardProps } from '../../../utils';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';

// Register the required components for the chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const RevenueAreaChart = ({ currentYear, previousYear }: RevenueBoardProps) => {
  const chartRef = useRef<any>(null);

  const data: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: `${currentYear}`,
        data: [100, 95, 190, 490, 580, 550, 600, 580, 630, 650, 700, 930],
        borderColor: '#FF5B5B', // Line color for Sales
        backgroundColor: 'rgba(75, 192, 192, 0)', // Will be replaced by gradient
        fill: false,
        tension: 0.4,
        pointRadius: 1,
      },
      {
        label: `${previousYear}`,
        data: [60, 120, 135, 150, 290, 380, 400, 590, 540, 550, 600, 630],
        borderColor: '#2D9CDB',
        backgroundColor: 'rgba(255, 99, 132, 0)',
        fill: false,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      tooltip: {
        enabled: true,
        mode: 'index',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
          text: 'Month',
        },
      },
      y: {
        display: true,
        title: {
          display: false,
          text: 'Amount (in USD)',
        },
        beginAtZero: true,
      },
    },
  };

  // Create gradient fills for the area chart
  const createGradient = (ctx: CanvasRenderingContext2D, color: string) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color); // Solid color at the top
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Transparent at the bottom
    return gradient;
  };

  // Effect to set the gradients when the chart is rendered
  useEffect(() => {
    const ctx = chartRef.current?.chartInstance?.ctx;
    if (ctx) {
      data.datasets[0].backgroundColor = createGradient(ctx, 'rgba(75, 192, 192, 1)'); // Gradient for Sales
      data.datasets[1].backgroundColor = createGradient(ctx, 'rgba(255, 99, 132, 1)'); // Gradient for Expenses
    }
  }, [data.datasets]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '300px' }}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default RevenueAreaChart;
