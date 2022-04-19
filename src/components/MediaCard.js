import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from './ProgressBar';

export function MediaCard({ loan: {
  image,
  loanAmount,
  loanFundraisingInfo,
  name,
  whySpecial } }) {
  return (
    <div className="Media-Card Flex-Column A-C J-S-B">
      <div className='Media-Image-Container Full-Width Cursor-Pointer' style={{
        backgroundImage: `url(${image.url})`,
      }} />
      <div className={'Media-Card-Info Flex-Column J-S-A A-C Full-Width'}>
        <span className='Flex-Column A-C Full-Width' style={{ flex: 1 }}>
          <p className='Media-Card-Name para'>{name}</p>
          <p className='Media-Card-Location para'>Ecuador</p>
        </span>
        <span className='Flex-Column J-F-S A-C' style={{flex: 1}}>
          <p className='para Media-Card-Why'>{whySpecial}</p>
        </span>
      </div>
      <div style={{ flex: 1 }} className={'Media-Card-Actions Full-Width Flex-Column A-C'}>
        <ProgressBar progress={loanFundraisingInfo.fundedAmount / loanAmount * 100} />
        <p className='Media-Card-To-Go'>${loanAmount - loanFundraisingInfo.fundedAmount} to go</p>
        <button className='Lend-Button'>Lend Now</button>
      </div>
    </div>
  )
}

MediaCard.propTypes = {
  loan: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired,
    loanFundraisingInfo: PropTypes.shape({
      fundedAmount: PropTypes.string.isRequired
    }),
    loanAmount: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    whySpecial: PropTypes.string.isRequired,
  })
}