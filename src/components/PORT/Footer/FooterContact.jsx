import React from 'react'
import './FooterContact.css'

const FooterContact = ({title, mesanger, phone, email}) => {
  return (
    <div className="FooterContact">
      <h2 className="FooterContact__title">
        {title}
      </h2>
      <ul className="FooterContact__itemContainer">
        <li className="Footer__contactItem FooterContact__mesanger">{mesanger}</li>
        <li className="Footer__contactItem FooterContact__phone">{phone}</li>
        <li className="Footer__contactItem FooterContact__email">{email}</li>
      </ul>
    </div>
  )
}

export default FooterContact
