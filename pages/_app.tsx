import type { AppProps } from 'next/app';
import "../style/app.scss";
import '../style/header.scss';
import "../style/hero.scss";
import "../style/footer.scss";
import '../style/socialMedia.scss';
import '../style/personalBackground.scss';

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}

export default MyApp

