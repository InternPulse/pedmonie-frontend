import { Routes, Route } from 'react-router-dom'
import SelectPayment from '../payment-components/SelectPayment'
import CreateLink from '../payment-components/CreateLink'
import PaymentLink from '../payment-components/PaymentLink'
import Payment from '../payment-components/Payment'

const PaymentPage = () => {

  return (
    <>
      <Routes>
         <Route path="/" element={ <PaymentLink /> } />
         <Route path="create-link" element={ <CreateLink /> } />
         <Route path="payment-link" element={ <PaymentLink /> } />
         <Route path="payment" element={ <Payment /> } />
      </Routes>
    </>
  )
}

export default PaymentPage