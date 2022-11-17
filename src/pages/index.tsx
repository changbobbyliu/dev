import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>boobar.eth</title>
        <meta name="description" content="boobar.eth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <h1 className="my-1 font-bold">boobar.eth</h1>
        <Image src="/logo-full.png" alt="logo" width={200} height={200} />
      </main>
    </>
  );
}
