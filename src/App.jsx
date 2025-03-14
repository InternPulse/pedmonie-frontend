import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./components/Layout/merchant-layout/MerchantLayout";
import Loading from "./components/Loading";
import AuthPage from "./pages/AuthPage";
import Signup from "./SignUp/SignUp";
import SelectPayment from "./payment-components/SelectPayment";
import CreatePaymentLink from "./payment-components/CreatePaymentLink";
import PaymentLink from "./payment-components/PaymentLink";
import Payments from "./pages/Payments";
import BankVerification from "./auth-components/BankVerification";
import IdVerification from "./auth-components/IdVerification";
import BusinessRegNum from "./auth-components/BusinessRegNum";
import Login from "./LoginUser/Login";
import LandingPageLayout from "./layouts/LandingPageLayout";
import SuperAdminLayout from "./components/Layout/SuperAdminLayout";
import Overview from "./pages/superadmin/Overview";
import Marchants from "./pages/superadmin/Marchants";
import Transaction from "./pages/superadmin/Transaction";
import Payouts from "./pages/superadmin/Payouts";
import FraudDetection from "./pages/superadmin/FraudDetection";
import Settings from "./pages/superadmin/Settings";
import UserManagement from "./components/superadmin-components/main/settings/UserManagement";
import SystemLogsAndManagement from "./components/superadmin-components/main/settings/SystemLogsAndManagement";
import FraudDetectionSet from "./components/superadmin-components/main/settings/FraudDetection";
import NotFound from "./pages/NotFound";
import { jwtDecode } from "jwt-decode";
import ProtectedRoute from "./components/ProtectedRoutes";
// import "./index.css";

function App() {
  const LandingHome = lazy(() => import("./pages/landingPage/LandingHome"));
  const Home = lazy(() => import("./pages/merchant/Home"));
  const Analytics = lazy(() => import("./pages/merchant/analytics"));
  const Payment = lazy(() =>
    import("./components/transactionConfirmationUI/Payment")
  );
  const Support = lazy(() => import("./pages/merchant/support/Support"));
  const AdminSupport = lazy(() => import("./pages/superadmin/Support"));
  const AdminAnalytics = lazy(() => import("./pages/superadmin/Analytics"));

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Landing Page Routing */}
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<LandingHome />} />
        </Route>

        {/* Authentication Routing */}
        <Route path="/verification" element={<AuthPage />} />
        <Route path="/bank-verification" element={<BankVerification />} />
        <Route path="/id-verification" element={<IdVerification />} />
        <Route path="/business-verification" element={<BusinessRegNum />} />
        <Route path="*" element={<NotFound />} />

        {/* Registration routing */}
        <Route path="/signin" element={<Signup />} />
        {/* Login routing */}
        <Route path="/login" element={<Login />} />

        {/* Merchant Routing */}
        {/* <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}> */}
        <Route path="/merchant" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="analytics" element={<Analytics />} />

          {/* payment routing */}
          <Route path="select-payment-type" element={<SelectPayment />} />
          <Route path="create-payment-link" element={<CreatePaymentLink />} />
          <Route path="payment-link" element={<PaymentLink />} />
          <Route path="payments" element={<Payments />} />
          <Route path="support" element={<Support />} />
        </Route>
        {/* </Route> */}

        {/* superadmin routing */}
        <Route path="/admin" element={<SuperAdminLayout />}>
          <Route index element={<Overview />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="marchants" element={<Marchants />} />
          <Route path="transactions" element={<Transaction />} />
          <Route path="payouts" element={<Payouts />} />
          <Route path="support" element={<AdminSupport />} />
          <Route path="fraud-detection" element={<FraudDetection />} />
          <Route path="settings" element={<Settings />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="system-logs" element={<SystemLogsAndManagement />} />
          <Route
            path="fraud-detection-set"
            element={<FraudDetectionSet />}
          />{" "}
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
// import { Routes, Route } from 'react-router-dom';
// import Overview from './pages/superadmin/Overview';
// import Analytics from './pages/superadmin/Analytics';
// import Marchants from './pages/superadmin/Marchants';
// import Transaction from './pages/superadmin/Transaction';
// import Payouts from './pages/superadmin/Payouts';
// import Support from './pages/superadmin/Support';
// import FraudDetection from './pages/superadmin/FraudDetection';
// import Settings from './pages/superadmin/Settings';
// import UserManagement from './components/superadmin-components/main/settings/UserManagement';
// import SystemLogsAndManagement from './components/superadmin-components/main/settings/SystemLogsAndManagement';
// import FraudDetectionSet from './components/superadmin-components/main/settings/FraudDetection';
// import PlatformsConfig from './components/superadmin-components/main/settings/PlatformsConfig';
// import MainLayout from './components/Layout/MainLayout';

// const App = () => {

//   return (
//     <>
//     {/* superadmin routing */}
//       <Routes>
//         <Route path='/' element={ <SuperAdminLayout /> }>
//           <Route index element={ <Overview /> }/>
//           <Route path='/analytics' element={ <Analytics /> }/>
//           <Route path='/marchants' element={ <Marchants /> }/>
//           <Route path='/transactions' element={ <Transaction /> }/>
//           <Route path='/payouts' element={ <Payouts /> }/>
//           <Route path='/support' element={ <Support /> }/>
//           <Route path='/fraud-detection' element={ <FraudDetection /> }/>

//           <Route path='/settings' element={ <Settings /> } />
//           <Route path='user-management' element={ <UserManagement /> }/>
//           <Route path='system-logs' element={ <SystemLogsAndManagement /> }/>
//           <Route path='fraud-detection-set' element={ <FraudDetectionSet /> }/>

//         </Route>
//       </Routes>
//     </>
//   )
// }
// export default App
