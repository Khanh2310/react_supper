import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './pages/App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './states/statusState.context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: 0,
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </AppProvider>
  // </React.StrictMode>
);
