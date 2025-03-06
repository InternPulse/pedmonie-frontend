import { Box, Text } from '@chakra-ui/react'
import ApiDocs from './components/ApiDocs/ApiDocs'
import Pricing from './components/Pricing/Pricing';


const App = () => {
  console.log("App Component Rendered!");


  return (
      <Box> 
        <Pricing />
        <ApiDocs /> 
      </Box>
  );
};
export default App;
