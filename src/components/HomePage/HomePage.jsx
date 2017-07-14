import './HomePage.css'
import Card from '../Card'
import Logo from '../Logo'
import Content from '../Content';
import Footer from '../Footer';
import Nav from '../Nav';


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
      <div className="HomePage__wrap">
        <header className="HomePage__header">
          <div className="HomePage__logoWrap">
            <Logo /> 
          </div>
          <Content />
          <Nav />
        </header>
        <Footer />
      </div>
      <div className="bg"></div>
      </section>
    );
  }
}

export default HomePage;