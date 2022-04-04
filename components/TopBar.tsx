import { Box, HStack, IconButton, Spacer, Image } from "@chakra-ui/react";

import { MdOutlineLogin } from "react-icons/md";
export default function TopBar() {
  return (
    <HStack height={"60px"} bg={"blue.600"} width={"100%"} px="30px">
      <Box width={"220px"}>
        <Image
          src="https://lh3.googleusercontent.com/L1RBkZpppM9SaahaEFo0ONa5hxo0DMb_bp1KM4N-N3sYM5WVITgiiGts6zCyqDR6dg"
          alt="logo"
          width={"30px"}
          height={"30px"}
        />
      </Box>
      <Spacer></Spacer>
      {/* <IconButton
        aria-label="logout"
        icon={<MdOutlineLogin />}
        onClick={() => {}}
      /> */}
    </HStack>
  );
}
