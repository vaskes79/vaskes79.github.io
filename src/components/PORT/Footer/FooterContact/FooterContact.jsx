import React from 'react'
import FooterTittle from '../FooterTitle'
import PropTypes from 'prop-types'
import './FooterContact.css'

const FooterContact = ({title, mesanger, phone, email}) => {
  return (
    <div className="FooterContact">
      <FooterTittle text={title} />
      <ul className="FooterContact__itemContainer">
        <li className="Footer__contactItem FooterContact__mesanger">{mesanger}</li>
        <li className="Footer__contactItem FooterContact__phone">{phone}</li>
        <li className="Footer__contactItem FooterContact__email">{email}</li>
      </ul>
    </div>
  )
}

FooterContact.propTypes = {
  title: PropTypes.string.isRequired,
  mesanger: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}


export default FooterContact
