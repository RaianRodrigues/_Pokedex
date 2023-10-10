import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from './theme/theme';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

	<React.StrictMode>

		<ChakraProvider theme={customTheme}>

			<QueryClientProvider client={queryClient}>

				<App />

			</QueryClientProvider>

		</ChakraProvider>

	</React.StrictMode>

)