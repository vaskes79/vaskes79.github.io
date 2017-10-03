import React from 'react'
//import Link from 'gatsby-link'
import HeaderWithImg from '../components/HeaderWithImg'
import ColorBox from '../components/ColorBox'

const COLORS = [
  { name: 'Red', value: 'E2574C' },
  { name: 'Green', value: '3db39e' },
  { name: 'Blue', value: '2ea9d3' },
  { name: 'Yellow', value: 'E2574C' },
  { name: 'Light', value: 'f2f1ef' },
  { name: 'Grey', value: 'd5d5d5' },
  { name: 'Deep', value: '4681A0' },
  { name: 'Dark', value: '324d5b' },
]

const StyleGide = () => {

  return (
    <div>
      <HeaderWithImg />
      <div className="section group" style={{ maxWidth: '940px', margin: '0 auto' }}>
        <div className="col span_12_of_12">
          <h1 style={{ textAlign: 'center', fontSize: '72px', padding: '50px 0' }}>Basic Elements</h1>
        </div>
        <div className="col span_12_of_12" style={{ display: 'flex', justifyContent: 'space-between' }}>
          {
            COLORS.map(({ name, value }, i) => <ColorBox key={Date.now() + `-${i}`} colorValue={value} name={name} />)
          }
        </div>
      </div>
    </div>
  )
}

//export const query = graphql`
//  query PageQuery {
//    site{
//      siteMetadata{
//        page2 {
//          title,
//          description
//        }
//      }
//    }
//  }
//`
export default StyleGide
