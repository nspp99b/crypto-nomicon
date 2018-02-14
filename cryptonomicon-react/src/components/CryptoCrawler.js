import React from 'react'

const CryptoCrawler = ({cryptos}) => {

  const crawlerArray = cryptos.map(c => ` ${c.symbol}...${c.price_usd}`)

  return (
    <div>
      <p className="marquee">
        <span>{crawlerArray}</span>
      </p>
    </div>
  )
}

export default CryptoCrawler
