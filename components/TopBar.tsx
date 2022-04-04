import { Box, HStack, IconButton, Spacer } from "@chakra-ui/react";
import { MdOutlineLogin } from "react-icons/md";
export default function TopBar() {
  return (
    <HStack height={"60px"} bg={"blue.600"}>
      <Box width={"220px"}>
        <img src="/images/logo.png" alt="logo" />
      </Box>
      <Spacer></Spacer>
      <IconButton aria-label="logout" icon={<MdOutlineLogin />} />
    </HStack>
  );
}
