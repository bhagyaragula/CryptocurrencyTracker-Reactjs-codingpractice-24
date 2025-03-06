// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyData} = props

  return (
    <li className="item-container">
      <div className="logo-container">
        <img
          className="logo-img"
          src={cryptoCurrencyData.currencyLogoUrl}
          alt={cryptoCurrencyData.currencyName}
        />
        <p className="currency-name">{cryptoCurrencyData.currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="currency-value">{cryptoCurrencyData.usdValue}</p>
        <p className="currency-value">{cryptoCurrencyData.ueroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
