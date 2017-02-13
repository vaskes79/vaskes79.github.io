import './HomePage.css'
import Card from '../Card'
import Logo from '../Logo'

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
        <div className="logo--devWrap">
          <Logo />
        </div>
      </section>
    );
  }
}

export default HomePage;