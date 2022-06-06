import { Flex, Image, Text } from "@chakra-ui/react";

export function About() {
  return (
    <Flex w="100%" align="center" justify="center" bgColor="gray.300" py="24">
      <Flex w="80%" align="center">
        <Image src="../../../public/about.jpg" />

        <Flex direction="column" ml="20">
          <Text color="green.700" fontWeight="bold">
            SOBRE NÓS
          </Text>
          <Text fontSize="3xl" fontWeight="bold" mt="2" mb="4" color="black">
            Entenda quem somos e por que existimos
          </Text>
          <Text color="black" fontWeight="bold" mt="3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            delectus nobis quos, ipsam dolor, dignissimos inventore incidunt
            fuga, ea eveniet reiciendis consequatur? Consectetur cumque
            repellendus non maiores assumenda, molestiae ad? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Ut expedita eos, omnis ab
            saepe in porro corporis fugit animi! Totam sunt, nesciunt tempora
            iste saepe voluptate. Hic excepturi facilis debitis. Lorem ipsum
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
