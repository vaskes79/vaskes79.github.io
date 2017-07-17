import React,{Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
        data: this.props.data,
        openArticle: false,
        activeArticle: null
      };
      this.articleHanler = this.articleHanler.bind(this);
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

  articleHanler (articleID = null) {
    console.log('work switch handler: ', articleID);

    let activeArticle = this.state.data.articles.find( article => article.id === articleID )

    if(activeArticle) {
      this.setState({
        activeArticle,
        openArticle: true,
      })
    } else {
      this.setState({
        activeArticle: null,
        openArticle: false
      })
    } 
  }

  render () {
    let {name, description, navLinks, articles} = this.state.data;
    return (
      <section className={`HomePage ${this.state.loading ? 'loading': ''}`}>
      <div className="HomePage__wrap">
        <ReactCSSTransitionGroup
          transitionName='HomePage__animation'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
            { this.state.openArticle ? '' :
              <header className="HomePage__header">
                <div className="HomePage__logoWrap">
                  <Logo /> 
                </div>
                <Content name={name} description={description}/>

                <Nav navLinks={navLinks} switchHandler={this.articleHanler}/>
              </header>
            }
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName='Article__animation'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.state.openArticle ? <Article data={this.state.activeArticle} btnCloseHandler={this.articleHanler} /> : ''}
        </ReactCSSTransitionGroup>
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