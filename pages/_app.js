import { Provider as ReduxProvider } from 'react-redux';
import { Provider as NextAuthProvider } from 'next-auth/client';
import store from '../redux';

function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </NextAuthProvider>
  );
}
export default MyApp;
