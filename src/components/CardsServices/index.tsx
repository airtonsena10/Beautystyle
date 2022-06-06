import { Flex, Text } from "@chakra-ui/react";
import { Cards } from "./Cards";

export function CardsServices() {
  return (
    <Flex w="100%" bgColor="gray.600" justify="center">
      <Flex w="80%" justify="center" align="center" direction="column">
        <Flex w="500px" mt="5" mb="16" direction="column" textAlign="center">
          <Text color="gray.700" fontWeight="bold" letterSpacing="wider">
            SERVIÇOS
          </Text>
          <Text fontSize="4xl" fontWeight="bold" mt="6">
            Tratamentos exclusivos e totalmente naturais
          </Text>
        </Flex>

        <Cards />
      </Flex>
    </Flex>
  );
}
