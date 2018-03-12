import React from 'react'
import PropTypes from 'prop-types'
import './PortfolioItem.css'

const PortfolioItem = ({title, img, content}) => {
  return(
    <div className="PortfolioItem">
      <img className="PortfolioItem__img"  alt={title} src={img} />
      <h1 className="PortfolioItem__title" >{title}</h1>
      <div className="PortfolioItem__content">
        <div className="PortfolioItem__closeBtn" />
        <article className="PortfolioItem__article">
          <img className="PortfolioItem__articleImg" alt={content.title} src={content.img} />
          <div className="PortfolioItem__descriptionConatiner">
            <h1 className="PortfolioItem__articleTitle">{content.title}</h1>
            <div className="PortfolioItem__articleDescription">{content.description}</div>
          </div>
        </article>
      </div>
    </div>
  )
}

PortfolioItem.defaultProps = {
  title: 'First Project my first project created for my portfolio web, frontend and react developer.If you want more about me and may works, open this project',
  img: 'https://downloader.disk.yandex.ru/preview/dc452f9efb3a8d8f7f124a41ed5f07560f86a0431b607f9c0fa8f02a3b6de9af/inf/Hosfs0mUHOxL8OlXmcDfwGsyJOr4_Pks-DKb92AxKZFKV-Fzul5DJtVETgtfCwpclRn4Y6QBomUjzQDg7iiB5A%3D%3D?uid=0&filename=thumb-07.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=2048x2048',
  content: {
    title: 'First Project',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    img: 'https://downloader.disk.yandex.ru/preview/634edb6c5931bbefd866c994003b4342ccb33412e7e78f94dd1421ca5c3e8f40/inf/Hosfs0mUHOxL8OlXmcDfwMUJUgTQP2jQ1pOJ7oPPzTy97tdXvE3vpTHjFD96T6vHZwSsObyplnVHPTtUYDQb3A%3D%3D?uid=0&filename=work-09.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=2048x2048',
  }
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  content: PropTypes.object
}

export default PortfolioItem
