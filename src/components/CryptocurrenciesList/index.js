// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  renderCryptoCurrencyHeader = () => (
    <div className="list-header">
      <p className="coin-type-heading">Coin Type</p>
      <div className="usd-euro-container">
        <p className="coin-value">USD</p>
        <p className="coin-value">EURO</p>
      </div>
    </div>
  )

  renderCryptoCurrenciesView = () => {
    const {cryptoCurrenciesData} = this.props

    return (
      <div className="crypto-currency-list">
        {this.renderCryptoCurrencyHeader()}
        <ul className="list-body">
          {cryptoCurrenciesData.map(eachCryptoCurrencyData => (
            <CryptocurrencyItem
              key={eachCryptoCurrencyData.id}
              cryptoCurrenciesData={eachCryptoCurrencyData}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="crypto-currency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="crypto-currency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="Cryptocurrency Tracker"
        />
        {this.renderCryptoCurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrencyList
