import './HomePage.css'
import Card from '../Card'

class HomePage extends React.Component {
  constructor(props) {
      super();
  }

  componentWillMount() {
    document.title = 'Vasily Guzov'
  }

  render () {
    return (
      <section className="HomePage">
        <Card />
      </section>
    );
  }
}

export default HomePage;