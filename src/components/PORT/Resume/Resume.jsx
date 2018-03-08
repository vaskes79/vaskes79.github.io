import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <section className="Resume">
      <header className="Resume__header">
        <a href="#" className="Resume__closeBtn">→ close panel</a>
      </header>
      <div className="Resume__container">
        <article className="Resume__part">
          <h2 className="Resume__title">
            personal info
          </h2>
          <div className="Resume__partCategory">
            <h4 className="Resume__category">adress</h4>
            <ul className="Resume__partCategoryContent">
              <li className="Resume__partCategoryContentItem">
                A street address
                Your Town
                Your Region
                Postal Code
                Country
              </li>
            </ul>
          </div>
          <div className="Resume__partCategory">
            <h4 className="Resume__category">phone</h4>
            <ul className="Resume__partCategoryContent">
              <li className="Resume__partCategoryContentItem">
              +34-609449900
              </li>
              <li className="Resume__partCategoryContentItem">
              +34-609449900
              </li>
            </ul>
          </div>
          <div className="Resume__partCategory">
            <h4 className="Resume__category">social</h4>
            <ul className="Resume__partCategoryContent">
              <li className="Resume__partCategoryContentItem">
                <a href="http://facebook.com/vguzov" className="Resume__link">facebook</a>
              </li>
              <li className="Resume__partCategoryContentItem">
                <a href="http://facebook.com/vguzov" className="Resume__link">twitter</a>
              </li>
              <li className="Resume__partCategoryContentItem">
                <a href="http://facebook.com/vguzov" className="Resume__link">email</a>
              </li>
              <li className="Resume__partCategoryContentItem">
                <a href="http://facebook.com/vguzov" className="Resume__link">istagramm</a>
              </li>
              <li className="Resume__partCategoryContentItem">
                <a href="http://facebook.com/vguzov" className="Resume__link">vk</a>
              </li>
            </ul>
          </div>
        </article>


        <article className="Resume__part">
          <h2 className="Resume__title">
            skills
          </h2>
          <div className="Resume__partCategory">
            <h4 className="Resume__category">frontend</h4>
            <ul className="Resume__partCategoryContent">
              <li className="Resume__partCategoryContentItem">
              </li>
              <li className="Resume__partCategoryContentItem">React</li>
              <li className="Resume__partCategoryContentItem">JS</li>
              <li className="Resume__partCategoryContentItem">HTML</li>
              <li className="Resume__partCategoryContentItem">CSS</li>
              <li className="Resume__partCategoryContentItem">SVG</li>
            </ul>
          </div>
          <div className="Resume__partCategory">
            <h4 className="Resume__category">backend</h4>
            <ul className="Resume__partCategoryContent">
              <li className="Resume__partCategoryContentItem">
                nodejs
              </li>
              <li className="Resume__partCategoryContentItem">
              firebase
              </li>
              <li className="Resume__partCategoryContentItem">
              mongodb
              </li>
            </ul>
          </div>
        </article>


        <article className="Resume__part">
          <h2 className="Resume__title">
            experinece
          </h2>
          <div className="Resume__partCategory">
            <span className="Resume__year">sep 2010</span>
            <ul className="Resume__partCategoryContent">
              <li className="Resume__partCategoryContentItem">
                <h3 className="Resume__subTitle">
                  Freelance Web Designer
                </h3>
                <p className="Resume__info">
                  A few descriptive words about the project or developed work.
                  Web design schemes.
                  This is a list where you can add all information you need.
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="Resume__part">
          <h2 className="Resume__title">
            education
          </h2>
          <div className="Resume__partCategory">
            <span className="Resume__year">sep 2010</span>
            <ul className="Resume__partCategoryContent">
              <li className="Resume__partCategoryContentItem">
                <h3 className="Resume__subTitle">
                  Freelance Web Designer
                </h3>
                <p className="Resume__info">
                  A few descriptive words about the project or developed work.
                  Web design schemes.
                  This is a list where you can add all information you need.
                </p>
              </li>
            </ul>
          </div>
        </article>
      </div>


      <footer className="Resume__footer">
        <a href="#" className="Resume__closeBtn">→ close panel</a>
      </footer>
    </section>
  )
}

export default Resume
