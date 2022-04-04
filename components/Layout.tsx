import { Box, HStack, VStack } from "@chakra-ui/react";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

export default function Layout({ children }: any) {
  return (
    <VStack>
      <TopBar />
      <HStack>
        <NavBar />
        <Box>{children}</Box>
      </HStack>
    </VStack>
  );
}
