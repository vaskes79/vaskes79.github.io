import React,{Component, PropTypes} from 'react';

import './HomePage.css'
import Bg from '../Bg';
import Logo from '../Logo'
import Content from '../Content';
import Footer from '../Footer';
import Nav from '../Nav';


class HomePage extends Component {
  constructor(props) {
      super(props);
    console.log(this.props.data)
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
    let {name, description} = this.state.data;
    return (
      <section className={`HomePage ${this.state.loading ? 'loading': ''}`}>
      <div className="HomePage__wrap">
        <header className="HomePage__header">
          <div className="HomePage__logoWrap">
            <Logo /> 
          </div>
          <Content name={name} description={description}/>
          <Nav />
        </header>
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