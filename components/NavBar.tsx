import { Box, HStack, Icon, VStack } from "@chakra-ui/react";
import { MdPerson } from "react-icons/md";

const menus = [
  {
    name: "Home",
    href: "/",
    icon: MdPerson,
  },
];

export default function NavBar() {
  return (
    <VStack
      width={"220px"}
      height={"100%"}
      bg="blue.600"
      color="white"
      justify={"flex-start"}
      align="flex-start"
      px="30px"
    >
      {menus.map((menu) => (
        <HStack px={4} py={2} cursor="pointer">
          <Icon as={menu.icon} />
          <Box>{menu.name}</Box>
        </HStack>
      ))}
    </VStack>
  );
}
