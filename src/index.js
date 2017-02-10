import HomePage from './components/HomePage';

import './fonts/roboto/roboto.css'
import './fonts/MaterialIcons/material-icons.css'

const content = document.createElement('div');
content.id = 'root';
document.body.appendChild(content);

ReactDOM.render(<HomePage />, document.getElementById('root'));