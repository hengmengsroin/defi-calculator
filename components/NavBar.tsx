import { Box, HStack, Icon, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCasino, MdPerson } from "react-icons/md";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { activeMenuState } from "../src/states";

const menus = [
  {
    name: "Home",
    href: "/",
    icon: MdPerson,
  },
  {
    name: "Calculator",
    href: "/cal",
    icon: MdCasino,
  },
];

export default function NavBar() {
  const router = useRouter();
  const activeMenu = useRecoilValue(activeMenuState);

  return (
    <VStack
      width={"220px"}
      height={"100%"}
      bg="blue.600"
      justify={"flex-start"}
      align="flex-start"
      px="10px"
    >
      {menus.map((menu) => (
        <HStack
          px={4}
          py={2}
          cursor="pointer"
          key={menu.name}
          color={activeMenu == menu.href ? "white" : "grey"}
          onClick={() => {
            router.push(menu.href);
          }}
        >
          <Box as={menu.icon} size="30px" />
          <Box ml={4}>{menu.name}</Box>
        </HStack>
      ))}
    </VStack>
  );
}
