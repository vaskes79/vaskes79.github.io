import './index.css';
import HomePage from './components/HomePage';
import jsonData from './data.json';

const content = document.createElement('div');
content.id = 'root';
document.body.appendChild(content);

ReactDOM.render(<HomePage data={jsonData} />, document.getElementById('root'));