import React from 'react'
import PropTypes from 'prop-types'
import {uniqueId} from 'lodash'
import './ResumePart.css'

const createContent = (content) => {
  return content.map(({ url, name, describe, title}) => {
    return (
      <li className="ResumePart__partCategoryContentItem" key={uniqueId('listItem_')}>
        {
          url && name ?
            <a href={url} className="ResumePart__link">{name}</a>
            : title ? <h3 className="ResumePart__subTitle">{title}</h3>
              : describe
        }
      </li>
    )
  })
}

const ResumePart = ({ title, content }) => {
  return (
    <article className="ResumePart" style={{animationDelay: '200ms'}}>
      <h2 className="ResumePart__title">
        {title}
      </h2>
      {
        content.map( ({nameItem, list}) => {
          return (
            <div className="ResumePart__partCategory" key={uniqueId(`${nameItem}_`)}>
              <h4 className="ResumePart__category">{nameItem}</h4>
              <ul className="ResumePart__partCategoryContent">
                {createContent(list)}
              </ul>
            </div>
          )
        })
      }
    </article>
  )
}


ResumePart.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    nameItem: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      describe: PropTypes.string,
      url: PropTypes.string,
      name: PropTypes.string,
    })),
  }))
}


export default ResumePart
