import React, {PropTypes} from 'react';
import Form from '../Form';
import './Article.css';

function Article(props) {
    let {title, img, content, id} = props.data;
    let article = null;
    let imgContent = img ? <div className="Article__img"> <img src={img.src} alt={img.name}/> </div> : '';
    let contentArticle = content ? <div className="Article__content" dangerouslySetInnerHTML={createMarkup()}></div> : '' ;
    let titleArticle = title ? <h2 className="Article__title" >{title}</h2> : '' ;

    switch (id) {
        case '#contact': 
            article = <div className="Article__content"><Form /></div>;
            break;
        default:
            article = contentArticle; 
            break;
    }

    return (
        <article className="Article" id={id}>
            <button className="Article__btn" onClick={closeHandler}></button>
                { titleArticle }
                { imgContent }
                { article }
        </article>
    )

    function createMarkup() {
        return {__html: content};
    }

    function closeHandler (event) {
        event.preventDefault();
        props.btnCloseHandler();
    }

};

export default Article;