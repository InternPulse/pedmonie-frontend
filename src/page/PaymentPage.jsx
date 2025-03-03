import { Routes, Route } from 'react-router-dom'
import SelectPayment from '../payment-components/SelectPayment'
import CreatePaymentLink from '../payment-components/CreatePaymentLink'
import PaymentLink from '../payment-components/PaymentLink'
import Payment from '../payment-components/Payment'

const PaymentPage = () => {

  return (
    <>
      <Routes>
         <Route path="/" element={ <SelectPayment /> } />
         <Route path="create-payment-link" element={ <CreatePaymentLink /> } />
         <Route path="payment-link" element={ <PaymentLink /> } />
         <Route path="payment" element={ <Payment /> } />
      </Routes>
    </>
  )
}

export default PaymentPage