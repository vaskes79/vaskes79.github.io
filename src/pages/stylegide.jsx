import React from 'react'
//import Link from 'gatsby-link'
import HeaderWithImg from '../components/HeaderWithImg'
import ColorBox from '../components/ColorBox'
import Button from '../components/Button'

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
        <div className="col span_12_of_12" style={{ padding: '50px 0'}}>
          <hr style={{height: 4}}/>
        </div>
        <div className="col span_12_of_12" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button size='big' text='Hello' bgColor='green'/>
          <Button size='big' text='Hello' bgColor='green'roundSize='0.188rem'/>
          <Button size='big' text='Hello' bgColor='green'roundSize='0.5rem'/>
          <Button size='big' text='Hello' bgColor='green'roundSize='1.688rem'/>
        </div>
        <div className="col span_12_of_12" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button text='Hello' bgColor='red' />
          <Button text='Hello' bgColor='red' roundSize='3px' />
          <Button text='Hello' bgColor='red' roundSize='6px' />
          <Button text='Hello' bgColor='red' roundSize='23px' />
        </div>
        <div className="col span_12_of_12" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button size='small' text='Hello' bgColor='blue' />
          <Button size='small' text='Hello' bgColor='blue' roundSize='3px' />
          <Button size='small' text='Hello' bgColor='blue' roundSize='5px' />
          <Button size='small' text='Hello' bgColor='blue' roundSize='20px' />
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
