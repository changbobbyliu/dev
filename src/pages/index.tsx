import Head from "next/head";
import Image from "next/image";

import { Text } from "@/ui/components/Text.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>boobar.eth</title>
        <meta name="description" content="boobar.eth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <Text>boobar.eth</Text>
        <Image src="/logo-full.png" alt="logo" width={200} height={200} />
      </main>
    </>
  );
}
