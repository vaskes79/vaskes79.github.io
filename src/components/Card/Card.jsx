import React  from 'react';
import './Card.css';
import vasily from './vasily-guzov.jpg'

import Vk from './SVG/vk.svg'
import Fb from './SVG/facebook.svg'
import Github from './SVG/github.svg'
import Tw from './SVG/twitter.svg'
import Plus from './SVG/add.svg'

const Card = (props) => {
    let {} = props;
    return (
        <section className="Card">
            <div className="Card__wrap">
                 
                <Plus className="Card__btn"/>


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
                            <Fb />
                            </a>
                        </li>
                        <li className="Card__socIconsWrap">
                            <a href="#" className="Card__socIconsLink">
                            <Tw />
                            </a>
                        </li>
                        <li className="Card__socIconsWrap">
                            <a href="#" className="Card__socIconsLink">
                                <Github />
                            </a>
                        </li>
                        <li className="Card__socIconsWrap">
                            <a href="#" className="Card__socIconsLink">
                                <Vk />
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
