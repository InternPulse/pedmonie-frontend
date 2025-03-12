import { Routes, Route } from 'react-router-dom';
import Overview from './pages/superadmin/Overview';
import Analytics from './pages/superadmin/Analytics';
import Marchants from './pages/superadmin/Marchants';
import Transaction from './pages/superadmin/Transaction';
import Payouts from './pages/superadmin/Payouts';
import Support from './pages/superadmin/Support';
import FraudDetection from './pages/superadmin/FraudDetection';
import TicketOverview from './pages/superadmin/TicketOverview';
import PlatformsConfig from './pages/superadmin/PlatformsConfig';

const App = () => {
 
  return (
    <>
    {/* superadmin routing */}
      <Routes>
        <Route path='/' element={ <Overview /> }/>
        <Route path='/analytics' element={ <Analytics /> }/>
        <Route path='/marchants' element={ <Marchants /> }/>
        <Route path='/transaction' element={ <Transaction /> }/>
        <Route path='/payouts' element={ <Payouts /> }/>
        <Route path='/support' element={ <Support /> }/>
        <Route path='/fraud-detection' element={<FraudDetection />} />
        <Route path='/ticket-overview' element={<TicketOverview />} />
        <Route path='/platformsconfig' element={<PlatformsConfig />} />
      </Routes>
    </>
  )
}
export default App
