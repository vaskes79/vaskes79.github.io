import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import CloseBtn from '../../CloseBtn'
import './PortfolioArticle.css'

const PortfolioArticle = ({img, title, description}) => {

  return (
    <article className="PortfolioArticle PortfolioArticle--open">
      <header className="PortfolioArticle__header">
        <CloseBtn actionClose={() => console.log('PoftfolioArtilcle handler is working')} />
      </header>
      <div className="PortfolioArticle__img" style={{backgroundImage: `url(${img})` }}></div>
      <div className="PortfolioArticle__descriptionConatiner">
        <h1 className="PortfolioArticle__title">
          {title}
          <Link className="PortfolioArticle__link" to="/projects/DemoProject1">→ open project</Link>
        </h1>
        <div className="PortfolioArticle__description">{description}</div>
      </div>
    </article>
  )
}

PortfolioArticle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
// for dev
const DEMO_TEXT_LONG = 'Est magna exercitation do in. Dolor qui mollit excepteur dolor minim Lorem consequat id in cillum adipisicing. Anim labore laborum non occaecat ipsum eiusmod irure sint elit culpa nostrud duis. Proident adipisicing laboris aliqua magna. Ullamco ea eu sunt duis Lorem qui ut do. Dolore irure duis sint id tempor laboris irure ullamco. Ipsum veniam veniam et aliqua eiusmod nulla velit anim consequat nulla elit in cillum. Duis anim aliquip dolor dolore cupidatat eiusmod voluptate aute elit ut. Nulla ut et consequat labore qui eiusmod aute sint. Exercitation incididunt occaecat deserunt id enim consectetur magna ea laborum voluptate cillum nulla ut nostrud. Fugiat velit aute est enim nostrud elit proident. Incididunt consequat commodo ut ipsum consequat eu ipsum amet et ullamco aliqua minim minim ullamco. Irure reprehenderit id consequat cillum aliquip aute id non anim. Nulla occaecat quis excepteur aliqua veniam nisi ea in anim. Et est et reprehenderit laborum excepteur et mollit voluptate tempor amet irure proident. Consequat in est tempor reprehenderit minim nostrud adipisicing amet aute sunt mollit. Ex sint ipsum tempor eu eu do. Aute occaecat laborum enim sint exercitation voluptate aute incididunt do. Id nisi reprehenderit eu aute do. Labore amet nostrud mollit deserunt mollit mollit labore tempor nisi est. Minim aliqua esse culpa in nisi ipsum sit ad occaecat culpa aliquip qui deserunt magna. Eu enim dolor dolore dolor dolor Lorem. Reprehenderit labore do aliqua ipsum enim nulla excepteur sint laboris. Duis aliqua nisi mollit nisi consequat Lorem Lorem nulla adipisicing ea. Occaecat esse elit esse pariatur pariatur incididunt qui voluptate minim anim et. Sit sunt officia incididunt labore ea tempor est fugiat quis. Nostrud pariatur eiusmod est elit consectetur dolore ipsum velit cupidatat ex nisi ad. Veniam non in proident occaecat incididunt proident velit laborum labore eiusmod. Do irure ullamco ex non voluptate duis irure laborum. Id in ut nulla sit et voluptate cupidatat laboris dolore. Consectetur fugiat nulla consectetur proident labore adipisicing officia proident. Voluptate Lorem dolore anim voluptate sunt eiusmod reprehenderit aliquip. Aliqua amet aute sint ipsum adipisicing nulla elit. Ullamco exercitation labore adipisicing exercitation irure cupidatat eu aute velit in consectetur. Laboris pariatur labore consectetur do in consequat ut nostrud commodo in exercitation excepteur. Adipisicing Lorem velit dolor anim commodo fugiat reprehenderit do dolore cillum non culpa do. Voluptate dolor eiusmod enim commodo fugiat. Excepteur ullamco do labore deserunt exercitation mollit in irure sunt commodo ut. Anim aliqua anim veniam est eiusmod ea occaecat. Irure pariatur ipsum sunt eiusmod anim laboris. Qui veniam veniam exercitation qui. Aliquip ea dolor ullamco consequat et voluptate exercitation. Aute amet nostrud do irure do reprehenderit aliquip amet mollit. Anim laborum sint Lorem nisi. Tempor nostrud reprehenderit pariatur elit. Enim elit qui laborum aliqua dolore cupidatat aute adipisicing eiusmod ut aute qui dolore adipisicing. Laborum labore reprehenderit culpa anim mollit consectetur commodo voluptate voluptate anim fugiat fugiat tempor duis. Nisi enim Lorem ad mollit exercitation velit magna fugiat ad adipisicing elit ad. Mollit culpa ullamco minim eiusmod do nisi pariatur et proident eiusmod. Deserunt incididunt fugiat esse nisi dolor veniam elit sit eiusmod commodo aliquip id dolore. Nulla anim est magna mollit. Aliquip qui incididunt culpa cupidatat adipisicing ipsum ut ea. Elit amet commodo aliqua irure sit non tempor ex et do. Sint ex eu commodo aliqua veniam ex Lorem laborum do.'
const DEMO_TEXT_SHORT = 'Est magna exercitation do in. Dolor qui mollit excepteur dolor minim Lorem consequat id in cillum adipisicing. Anim labore laborum non occaecat ipsum eiusmod irure sint elit culpa nostrud duis. Proident adipisicing laboris aliqua magna. Ullamco ea eu sunt duis Lorem qui ut do. Dolore irure duis sint id tempor laboris irure ullamco. Ipsum veniam veniam et aliqua eiusmod nulla velit anim consequat nulla elit in cillum.'

PortfolioArticle.defaultProps = {
  title: 'Name Project',
  description: DEMO_TEXT_SHORT,
  img: 'https://placeimg.com/640/480/tech',
}
// end dev
export default PortfolioArticle
