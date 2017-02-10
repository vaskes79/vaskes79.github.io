import React  from 'react';
import './Card.css';
import vasily from './vasily-guzov.jpg'

import vk from './icons/SVG/vk.svg'
import fb from './icons/SVG/facebook.svg'
import github from './icons/SVG/github.svg'
import tw from './icons/SVG/twitter.svg'

const Card = (props) => {
    let {} = props;
    return (
        <section className="Card">
            <div className="Card__wrap">
                <i className="Card__btn material-icons">add</i>
                <div className="Card__photo">
                    <img src={vasily} alt="Vasily guzov" className="Card__img"/>
                </div>
                
                <header className="Card__header">
                    <h2 className="Card__name">Vasily Guzov</h2>
                    <p className="Card__shortDescription">
                    Hello my name is Vasily Guzov I'm 35 years old. I'm frontend developer. 
                    </p>
                </header>

                <footer className="Card__footer">
                    <ul className="Card__socIcons">
                        <li className="Card__socIconsWrap">
                            <a href="#" className="Card__socIconsLink">
                                <img src={fb} className="Card__socIcon Card__socIcon--fb"></img >
                            </a>
                        </li>
                        <li className="Card__socIconsWrap">
                            <a href="#" className="Card__socIconsLink">
                                <img src={tw} className="Card__socIcon Card__socIcon--twitter"></img>
                            </a>
                        </li>
                        <li className="Card__socIconsWrap">
                            <a href="#" className="Card__socIconsLink">
                                <img src={github} className="Card__socIcon Card__socIcon--github"></img>
                            </a>
                        </li>
                        <li className="Card__socIconsWrap">
                            <a href="#" className="Card__socIconsLink">
                                <img src={vk} className="Card__socIcon Card__socIcon--vk"></img >
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </section>
    )
};

Card.propTypes = {
};

Card.defaultProps = {
};


export default Card;
