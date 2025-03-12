import { Routes, Route } from 'react-router-dom';
import Overview from './pages/superadmin/Overview';
import Analytics from './pages/superadmin/Analytics';
import Marchants from './pages/superadmin/Marchants';
import Transaction from './pages/superadmin/Transaction';
import Payouts from './pages/superadmin/Payouts';
import Support from './pages/superadmin/Support';
import RealTimeAlert from './pages/superadmin/RealTimeAlert';
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
        <Route path='/support' element={<Support />} />
        <Route path='/realtime-alert' element={<RealTimeAlert />} />
        <Route path='/platforms-config' element={<PlatformsConfig />} />
      </Routes>
    </>
  )
}
export default App
