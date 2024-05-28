import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="https://www.coinpayments.net/index.php" method="post">
	<input type="hidden" name="cmd" value="_pay_simple"/>
	<input type="hidden" name="reset" value="1"/>
	<input type="hidden" name="merchant" value="a42270bad6e33209eb5d554a4ec073ef"/>
	<input type="hidden" name="item_name" value="NFT listing"/>
	<input type="hidden" name="item_desc" value="NFT listing"/>
	<input type="hidden" name="currency" value="USD"/>
	<input type="hidden" name="amountf" value="2.00000000"/>
	<input type="hidden" name="want_shipping" value="0"/>
	<input type="image" src="https://www.coinpayments.net/images/pub/buynow-grey.png" alt="Buy Now with CoinPayments.net"/>
</form>

    </div>
  );
}

export default App;
