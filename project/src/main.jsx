import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import "./styles/animations.css";
import "./styles/components.css";
import "./styles/index.css";
import "./styles/layout.css";
import "./styles/typography.css";
import "./styles/utilities.css";
import "./styles/variables.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)