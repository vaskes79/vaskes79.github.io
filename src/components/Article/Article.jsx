import React, {PropTypes} from 'react';
import './Article.css'

function Article(props) {
    let {title, img, content, id} = props.data;
    function createMarkup() {
        return {__html: content};
    }

    function closeHandler (event) {
        event.preventDefault();
        props.btnCloseHandler();
    }

    return (
        <article className="Article" id={id}>
            <button className="Article__btn" onClick={closeHandler}></button>
            <h2 className="Article__title">{title}</h2>
            <div className="Article__img">
                 <img src={img.src} alt={img.name}/> 
            </div>
            <div className="Article__content" dangerouslySetInnerHTML={createMarkup()}></div>
        </article>
    )
}

export default Article;