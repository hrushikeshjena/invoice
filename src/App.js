import './App.css'

function App() {
  const data = [
    {
      no: '1',
      item: 'Galaxy Note 10- Matte Black-128 GB',

      hsn: '1002',
      qty: '2 Pcs',
      rate: '787909',
      discount: '100',
      tax: '100',
      amount: '12000',
    },
  ]
  return (
    <div className="invoice">
      <div className="head-i">
        <div className="logo-a">
          <div>Logo</div>
          <h3>Mayank & Sons</h3>
          <div>
            Phone no.: +91 9888888888
            <div className="addr">
              {' '}
              158, Keshavpark, Piraman Road, Near Sravan School, State- Odisha
              City- Ankleshwar, Pincode -394001{' '}
            </div>
          </div>
        </div>

        <div>
          <div className="tax">
            {' '}
            <h1>TAX INVOICE</h1>
            <p>(Original for recipient)</p>
          </div>
          <div className="left-s">
            <p>Invoice Number: INV-13421</p>
            <p>Invoice Date: 18 October 2019</p>
            <p>Due Date: 17 December 2019</p>
            <p>GSTIN:27AAAAAAAACGBHS9</p>
            <p>PO No. : 1248579245</p>
            <p>E-way Bill No. :27AAAAAAAACGBHS9</p>
            <p>Vehicle No. :27AAAAAAAACGBHS9</p>
          </div>
        </div>
      </div>

      <div className="invoice-section bill-s">
        <div className="bill">
          <h3>Bill To</h3>
          <p>Ballarpur Industries Limited</p>
          <p>Phone no: +91 9884206467</p>
        </div>
        <div className="ship">
          <div className="ship-to">
            {' '}
            <h3>Ship To</h3>
          </div>
          <p>Ballarpur Industries Limited</p>
          <p>Phone no: +91 9884206467</p>
        </div>
      </div>

      <div classsName="bill-s">
        <table>
          <thead>
            <tr className="table-h">
              <th>#</th>
              <th className="items">ITEM</th>
              <th>HSN/SAC</th>
              <th>QTY</th>
              <th>RATE/ITEM</th>
              <th>DISCOUNT</th>
              <th>TAX</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="table-d">
                <td>{item.no}</td>
                <td>{item.item}</td>
                <td>{item.hsn}</td>
                <td>{item.qty}</td>
                <td>{item.rate}</td>
                <td>{item.discount}</td>
                <td>{item.tax}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
            <tr className="total-r total-tl">
              <td></td>
              <td></td>
              <td>Total</td>
              <td>3Pcs</td>
              <td></td>
              <td>200</td>
              <td>300</td>
              <td>₹ 62,0000</td>
            </tr>
            <tr className="gst">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>IGST @ 12%:</td>
              <td></td>
              <td>₹ 36,720</td>
            </tr>
            <tr className="gst">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>SGST @ 12%:</td>
              <td></td>
              <td>₹ 36,720</td>
            </tr>
            <tr className="gst">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Shipping Charges</td>
              <td></td>
              <td>₹ 750</td>
            </tr>
            <tr className="gst">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Round Off:</td>
              <td></td>
              <td>₹ 36,720</td>
            </tr>
            <tr className="gst">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="tot-l">Total:</td>
              <td className="tot-l">₹ 36,720</td>
            </tr>
            <tr className="gst">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Received:</td>
              <td>₹ 36,720</td>
            </tr>
            <tr className="gst">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="total-t">Total:</td>
              <td className="total-t">₹ 36,720</td>
            </tr>
          </tbody>
        </table>
      </div>
    
      <div className="bank-auth">
        <div className="invoice-section bank-d">
          <h3>Payment Options:</h3>
          <p>Bank Details:</p>
          <p>Account Number: 12345567788900</p>
          <p>IFSC Code: HDFC00023</p>
          <p>Branch Name: HDFC Kasavanahalli</p>
          <p>Account Holder's Nome: Abhishek</p>
        </div>
        <div className="invoice-section auth-s">
          <div className="box-s"></div>
          <h4>Authorised Signatory For</h4>
          <p>Sharma Store</p>
        </div>
      </div>

      <div className="qr">
        <div>qr</div>
        <div className="qr-d">
          <p>UPI ID:</p>
          <p>878454554121@upi</p>
          <p>Scan QR Code with UPI Apps To Pay:</p>
        </div>
      </div>
        <div className="dec-l">
       <div className="note"> <p>Note</p></div>
        <h3> Declaration</h3>
        <p>
          All items once said are non-returnable only exchange is allowed after
          verification
        </p>
      </div>
    </div>
  )
}

export default App
