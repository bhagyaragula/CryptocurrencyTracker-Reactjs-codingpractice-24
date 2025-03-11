// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrenciesData} = props
  const { currencyLogoUrl, currencyName, usdValue, euroValue, } = cryptoCurrenciesData 

  return (
    <li className="item-container">
      <div className="logo-container">
        <img
          className="logo-img"
          src={currencyLogoUrl}
          alt={currencyName}
        />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{ueroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
