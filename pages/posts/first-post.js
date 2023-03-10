import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script 
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy='lazyOnLoad'
        onLoad={
          () => console.log('script loaded. window.FB available')
        }
      />
      <h1>First Post</h1>
    </Layout>
  );
}

export default FirstPost;
