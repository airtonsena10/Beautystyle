import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

import { Header } from "./Header";
import { Stats } from "./Stats";

export function Home() {
  return (
    <Flex direction="column" align="center" bgImage="" bgColor="gray.500">
      <Header />

      <Flex w="100%" align="center" justify="center">
        <Flex w="80%" align="center" justify="space-between">
          <Flex direction="column" w="550px" mt="24">
            <Text color="gray.700" fontWeight="bold" letterSpacing="wider">
              BOAS-VINDAS A Beauty Style 👋
            </Text>
            <Text fontSize="5xl" fontWeight="bold" my="4">
              Saúde natural para os seus cabelos
            </Text>
            <Text mb="6">especializado em tratamentos naturais.</Text>

            <Button
              rounded="full"
              w="275px"
              py="6"
              border="2px"
              color="whiteAlpha.500"
              fontSize="sm"
              bgColor="gray.800"
              _hover={{
                bgColor: "gray.700",
              }}
            >
              <FaWhatsapp size="20px" />
              <Text ml="4">AGENDE SEU HORARIO</Text>
            </Button>
          </Flex>

          <Box boxSize="sm" mr="2">
            <Image src="../../../public/landingPage.png" />
          </Box>
        </Flex>
      </Flex>

      <Stats />
    </Flex>
  );
}
