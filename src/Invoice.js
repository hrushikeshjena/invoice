import React from 'react'
import './Style.css'

const Invoice = () => {
  const data = [
    {
      no: '1',
      item: 'SHOES VT',
      hsn: '64029990',
      qty: '210',
      unit: 'PRS',
      price: '₹ 952.38',
      discount: '100',
      gst: ' ₹24,000.00 (12%)',
      amount: '₹ 2,24,000.00',
    },
  ]
  return (
    <div className='invoice-container'>
    
      <div className="head-t">
     <div className='tax-i'>
          <h1>Tax Invoice</h1>
          </div>
       
      </div>
      <div className="invoice">
        <div className="head-i">
          <div className="logo-a">
            <h4>Nayan Enterprise</h4>
            <div className="logo-a">
              <p>
                DWARKA, G/F PLOT AT KH NO-266, NEAR SEC-24, PHIRNI ROAD, VILLAGE
                DHOOLSIRAS, New Delhi, South West Delhi, Delhi, 110077 Phone
                no.: 7982174533 Email: narayanenterprises.textile@gmail.com
                GSTIN: 07AAOFN3274D1Z7, State: 07-Delhi{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="main-table">
          <table className="table">
            <thead className="table-c">
              <tr className="color">
                <th>Bill To</th>
                <th>Ship To</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="inst">
                  <h5>INSTAEMART</h5>
                  <p>WA-89 BLOCK NEW PATPARGANJ,ROAD</p>{' '}
                  <p>SHAKARPUR,DELHI 110092 </p>
                  <p>GSTIN : 07CMSPA8242G1ZW </p> <p>State: 07-Delhi</p>
                </td>
                <td className="wa-p">
                  <p>WA-89 BLOCK NEW PATPARGANJ,ROAD SHAKARPUR,DELHI 110092</p>
                </td>
                <td className="wa-pl">
                  <p>Place of supply: 07-Delhi </p>
                  <p> Invoice No. : 2618</p>
                  <p>Date : 20-01-2024 </p>
                  <p> TIme : 02:53 PM </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table">
            <thead className="table-c">
              <tr className="color">
                <th>#</th>
                <th>ITEM</th>
                <th>HSN/SAC</th>
                <th>QTY</th>
                <th>UNIT</th>
                <th>PRICE</th>
                <th>GST</th>
                <th>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className='item-t table-cl'>
                  <td>{item.no}</td>
                  <td>{item.item}</td>
                  <td>{item.hsn}</td>
                  <td>{item.qty}</td>
                  <td>{item.unit}</td>
                  <td>{item.price}</td>
                  <td>{item.gst}</td>
                  <td>{item.amount}</td>
                </tr>
                
              ))}
              
              <tr className="tdata table-cl">
                <td>2</td>
                <td>Nike Air</td>
                <td>56</td>
                <td>PRS</td>
                <td>210</td>
                <td>₹5678</td>
                <td>₹24,000.00</td>
                <td>₹2,24,000.00</td>
              </tr>
              <tr className="tdata ">
                <td></td>
                <td className='tota-l data-t'>TOTAL</td>
                <td></td>
                <td></td>
                <td className='tota-l data-t'>210</td>
                <td></td>
                <td className='tota-l data-t'>₹24,000.00</td>
                <td className='tota-l data-t'>₹2,24,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="main-table">
          <table className="table">
            <thead className="table-c">
              <tr className="color" >
                <th>Tax type</th>
                <th>Taxable Amount</th>
                <th>Rate</th>
                <th>Tax Amount</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="tdata">
                <td>SGST</td>
                <td>200000</td>
                <td>6%</td>
                <td>₹ 120000</td>
                <td className='total-l'>Sub Total</td>
                <td className='total-l'>₹ 224000</td>
              </tr>
              <tr className="tdata">
                <td>CGST</td>
                <td>200000</td>
                <td>6%</td>
                <td>₹ 120000</td>
                <td >Total</td>
                <td>₹ 224000</td>
              </tr>
              <tr className="tdata">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Received</td>
                <td>₹ 00</td>
              </tr>
              <tr className="tdata">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='total-l'>Balance</td>
                <td className='total-l'>₹ 240000</td>
              </tr>
            </tbody>
          </table>
          <table className="table">
            <thead className="table-c">
              <tr className="color wid-t">
                <th >Invoice Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="tdata">
                <td>Two Lakh Twenty Four Thousands Rupees Only</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <table className="table">
            <thead className="table-c">
              <tr className="color wid-t">
                <th>Payment Mode</th>
               
              </tr>
            </thead>
            <tbody>
              <tr className="tdata" >
                <td>Credit</td>
                <td> </td>
              </tr>
            </tbody>
          </table>
          <table className="table">
            <thead className="table-c">
              <tr className="color wid-t text">
                <th>Terms and Conditions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thanks for doing business with us!</td>
                <td className='textr'>For, Narayan Enterprises</td>
              </tr>
            </tbody>
          </table>
          <table className="table">
            <thead className="table-c">
              <tr className="color wid-t text">
                <th>Back details</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Bank Name: ICIC BANK LTD
                  <p>Bank Account No.: 9876523456</p>
                  <p>Bank IFSC code: ICIC987654</p>
                </td>
                <td className='textr'>
                 Authorized Signatory
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='text-v'>
        <h3>ACKNOWLEDGEMENT</h3>
        <h1>NARAYAN ENTERPRISES</h1>
      </div>
      <div className='text-f'>
        <div>
          <h3>INSTAEMART</h3>
          <p>WA-89 Block New PatraGanj, Road, Shakarpur, Dehli 110092</p>
        </div>
        <div className='invoice-p'>
          <p>INVOICE NO. : 2618</p>
          <p>INVOICE DATE : 20-01-2024</p>
          <p>INVOICE AMOUNT : ₹ 2,24,000.00 </p>
        </div>
      </div>
      <div className='text-v'>
        <p>Receiver's Seal & Sign</p>
      </div>
    </div>
  )
}

export default Invoice
