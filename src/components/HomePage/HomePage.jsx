import React,{Component, PropTypes} from 'react';

import './HomePage.css'
import Bg from '../Bg';
import Logo from '../Logo'
import Content from '../Content';
import Footer from '../Footer';
import Nav from '../Nav';
import Article from '../Article';


class HomePage extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: this.props.data
      };
  }

  componentWillMount() {
    document.title = 'Vasily Guzov'
    setTimeout( () => {
        this.setState({
          loading: false
        })
      }, 1000
    )
  }

  render () {
    let {name, description, navLinks, articles} = this.state.data;
    return (
      <section className={`HomePage ${this.state.loading ? 'loading': ''}`}>
      <div className="HomePage__wrap">
        <header className="HomePage__header">
          <div className="HomePage__logoWrap">
            <Logo /> 
          </div>
          <Content name={name} description={description}/>

          <Nav navLinks={navLinks} />
        </header>

        <Article data={articles[0]} />
        <Footer />
      </div>
      <Bg />
      </section>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.object,
};

export default HomePage;