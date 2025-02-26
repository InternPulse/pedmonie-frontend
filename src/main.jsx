import { StrictMode } from 'react'
// import { Provider } from "./components/ui/provider"
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider";
import './index.css'
import App from './App.jsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)