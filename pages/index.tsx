import { Heading, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <VStack align={"flex-start"} p="10" justify={"flex-start"} height="100%">
        <Heading>Home</Heading>
      </VStack>
    </Layout>
  );
};

export default Home;
