import Head from "next/head";
import ethereumSVG from "@/assets/ethereum.svg";

import { Text } from "@/ui/components/Text.component";
import { Card } from "@/ui/components/Card.component";

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
        <Card
          title="ChitChat"
          subtitle="You have a new message!"
          leftIcon={ethereumSVG}
        />
      </main>
    </>
  );
}
