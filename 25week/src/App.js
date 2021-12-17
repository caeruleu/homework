import logo from './logo.svg';
import './App.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['red', 'green', 'blue'],
  datasets: [{
      data: [10, 10, 10],
      backgroundColor: [
        'rgb(200, 0, 0)',
        'rgb(0, 200, 0)',
        'rgb(0, 0, 200)'
      ]
    }]
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Pie data={data} />
      </header>
    </div>
  );
}

export default App;