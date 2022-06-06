import { Flex, HStack, Text } from "@chakra-ui/react";
import { FiFacebook, FiYoutube, FiInstagram } from "react-icons/fi";

export function Footer() {
  return (
    <Flex w="100%" h="300px" bg="gray.700" align="center" justify="center">
      <Flex w="80%" align="center" justify="space-between">
        <Flex direction="column">
          <Flex mb="2">
            <Text fontSize="4xl" color="gray.50">
              Beauty
            </Text>
            <Text fontSize="4xl" color="gray.50" fontWeight="bold">
              Style
            </Text>
          </Flex>

          <Text color="gray.50" mb="2">
            &copy;2022 - BeautyStyle.
          </Text>
          <Text color="gray.50">Todos os direitos reservados</Text>
        </Flex>

        <HStack gap="4">
          <FiInstagram size="20px" color="#fff" />
          <FiFacebook size="20px" color="#fff" />
          <FiYoutube size="20px" color="#fff" />
        </HStack>
      </Flex>
    </Flex>
  );
}
