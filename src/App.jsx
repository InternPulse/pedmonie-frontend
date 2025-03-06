import { Box, Text } from '@chakra-ui/react'
import ApiDocs from './components/PreFooter/ApiDocs'
import Pricing from "./components/Pricing/Pricing";

const App = () => {
  return (
    <>
      <Box> 
        <ApiDocs />
        <Pricing></Pricing>
      </Box>
    </>
  );
};
export default App;
