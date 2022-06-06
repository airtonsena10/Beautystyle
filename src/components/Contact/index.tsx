import { Button, Flex, Image, Text } from "@chakra-ui/react";

import { FaWhatsapp } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";

export function Contact() {
  return (
    <Flex
      w="100%"
      align="center"
      justify="center"
      bgColor="whiteAlpha.800"
      py="32"
    >
      <Flex w="80%" align="center" justify="space-between">
        <Flex direction="column" w="500px">
          <Text color="white.900" fontSize="3xl" fontWeight="bold" mb="4">
            Entre em contato com a gente!
          </Text>
          <Flex align="center" mb="2">
            <GoLocation size="20px" color="#070c0b" />
            <Text ml="2" color="gray.900">
              R. salvador bahia, 788
            </Text>
          </Flex>

          <Flex align="center">
            <MdOutlineEmail size="20px" color="#0e1615" />
            <Text ml="2" color="gray.900">
              contato@beautystyle.com
            </Text>
          </Flex>

          <Button
            rounded="full"
            w="275px"
            py="6"
            border="2px"
            mt="6"
            color="whiteAlpha.900"
            fontSize="sm"
            bgColor="gray.700"
            _hover={{
              bgColor: "gray.900",
            }}
          >
            <FaWhatsapp size="20px" />
            <Text ml="4">AGENDE SEU HORARIO</Text>
          </Button>
        </Flex>

        <Image src="../../../public/contactUs.png" />
      </Flex>
    </Flex>
  );
}
