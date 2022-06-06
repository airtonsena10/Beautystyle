import {
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

export function Header() {
  return (
    <Flex w="100%" align="center" justify="center">
      <Flex w="80%" align="center" justify="space-between" py="6">
        <Flex align="center" justify="center">
          <Text fontSize="3xl" color="gray.100">
            Beauty
          </Text>
          <Text fontSize="3xl" fontWeight="semibold" color="gray.800">
            Style
          </Text>
        </Flex>

        <UnorderedList listStyleType="none" display="flex" flexDirection="row">
          <ListItem px="4" color="gray.100" cursor="pointer" fontWeight="bold">
            <a href="#Home"> Inicio</a>
          </ListItem>
          <ListItem px="4" color="gray.100">
            <Link href="#About">Sobre</Link>
          </ListItem>
          <ListItem px="4" color="gray.100">
            <Link id="#services"> Serviços</Link>
          </ListItem>
          <ListItem px="4">Depoimentos</ListItem>
        </UnorderedList>

        <Button
          rounded="full"
          w="200px"
          py="6"
          border="2px"
          borderColor="gray.700"
          color="green.700"
          fontSize="sm"
          bgColor="transparent"
          _hover={{
            bgColor: "gray.600",
            color: "gray.100",
            borderColor: "gray.900",
          }}
        >
          Agende Seu horario
        </Button>
      </Flex>
    </Flex>
  );
}
