import { Heading, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <VStack>
        <Heading>Home</Heading>
      </VStack>
    </Layout>
  );
};

export default Home;
