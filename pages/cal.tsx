import { Heading, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useSetRecoilState } from "recoil";
import Layout from "../components/Layout";
import { activeMenuState } from "../src/states";

const Home: NextPage = () => {
  const setActiveMenu = useSetRecoilState(activeMenuState);
  setActiveMenu("/cal");
  return (
    <Layout>
      <VStack align={"flex-start"} p="10" justify={"flex-start"} height="100%">
        <Heading>Calculator</Heading>
      </VStack>
    </Layout>
  );
};

export default Home;
