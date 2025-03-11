import { Routes, Route } from 'react-router-dom';
import Overview from './pages/superadmin/Overview';
import Analytics from './pages/superadmin/Analytics';
import Marchants from './pages/superadmin/Marchants';
import Transaction from './pages/superadmin/Transaction';
import Payouts from './pages/superadmin/Payouts';
import Support from './pages/superadmin/Support';
import FraudDetection from './pages/superadmin/FraudDetection';
import Settings from './pages/superadmin/Settings';
import UserManagement from './components/superadmin-components/main/settings/UserManagement';
import SystemLogsAndManagement from './components/superadmin-components/main/settings/SystemLogsAndManagement';
import FraudDetectionSet from './components/superadmin-components/main/settings/FraudDetection';
import PlatformsConfig from './components/superadmin-components/main/settings/PlatformsConfig';

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
        <Route path='/fraud-detection' element={ <FraudDetection /> }/>

        <Route path='/settings' element={ <Settings /> }>
          <Route path='user-management' element={ <UserManagement /> }/>
          <Route path='system-logs' element={ <SystemLogsAndManagement /> }/>
          <Route path='fraud-detection-set' element={ <FraudDetectionSet /> }/>
        </Route>
      </Routes>
    </>
  )
}
export default App
