import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import MainLayout from './components/Layout/MainLayout'
import Loading from './components/Loading'
import AuthPage from './pages/AuthPage'
import Signup from './SignUp/SignUp'
import SelectPayment from './payment-components/SelectPayment'
import CreatePaymentLink from './payment-components/CreatePaymentLink'
import PaymentLink from './payment-components/PaymentLink'
import Payments from './pages/Payments'
import BankVerification from './auth-components/BankVerification'
import IdVerification from './auth-components/IdVerification'
import BusinessRegNum from './auth-components/BusinessRegNum'
import Payment from './components/transactionConfirmationUI/Payment'
import Login from './LoginUser/Login'
// import "./index.css";

function App() {
  const Home = lazy(() => import('./pages/Home'))
  const Analytics = lazy(() => import('./pages/analytics'))
  const Payment = lazy(() =>
    import('./components/transactionConfirmationUI/Payment')
  )
  const Support = lazy(() => import('./pages/support/Support'))
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Authentication Routing */}
        <Route path="/verification" element={<AuthPage />} />
        <Route path="/bank-verification" element={<BankVerification />} />
        <Route path="/id-verification" element={<IdVerification />} />
        <Route path="/business-verification" element={<BusinessRegNum />} />

        {/* Registration routing */}
        <Route path="/signin" element={<Signup />} />
        {/* Login routing */}
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />

          {/* payment routing */}
          {/* <Route path="/select-payment-type" element={<SelectPayment />} />
          <Route path="/create-payment-link" element={<CreatePaymentLink />} />
          <Route path="/payment-link" element={<PaymentLink />} /> */}
          <Route path="/payments" element={<Payment />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
export default App
