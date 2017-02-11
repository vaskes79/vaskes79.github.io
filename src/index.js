import './index.css';
import HomePage from './components/HomePage';

const content = document.createElement('div');
content.id = 'root';
document.body.appendChild(content);

ReactDOM.render(<HomePage />, document.getElementById('root'));