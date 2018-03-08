import React from 'react'
import './Social.css'

const Social = ({fbLink, twLink, email}) => {
  return (
    <div className="Social__container">
      <a href={fbLink} className="Social Social--fb"></a>
      <a href={twLink} className="Social Social--twitter"></a>
      <a href={email} className="Social Social--email Social--last"></a>
    </div>
  )
}

Social.defaultProps = {
  fbLink: 'https://www.facebook.com/vguzov',
  twLink: '#',
  email: 'vasily@guzov.ru',
}

export default Social;
