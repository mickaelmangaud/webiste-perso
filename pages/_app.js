import { Provider as ReduxProvider } from 'react-redux';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { GlobalStyles, Navigation, Loader } from '../components';
import store from '../redux';

function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ReduxProvider store={store}>
        <GlobalStyles />
        <Loader />
        <Navigation />
        <Component {...pageProps} />
      </ReduxProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
