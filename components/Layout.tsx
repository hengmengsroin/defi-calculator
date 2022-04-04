import { Box, HStack, VStack } from "@chakra-ui/react";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

export default function Layout({ children }: any) {
  return (
    <VStack height={"100%"} width={"100%"}>
      <TopBar />
      <HStack height={"100%"} width={"100%"} mt="0 !important">
        <NavBar />
        {children}
      </HStack>
    </VStack>
  );
}
