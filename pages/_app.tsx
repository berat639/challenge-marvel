import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../reduxSlices/characters';
import { wrapper } from '../store';
import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const dispatch = useDispatch()

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? dispatch(setLoading(true)) : dispatch(setLoading(false));
    };
    const handleComplete = (url: string) => dispatch(setLoading(false));

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [dispatch, router]);

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)