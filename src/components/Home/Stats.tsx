import {
  Divider,
  Flex,
  Stat,
  StatHelpText,
  StatNumber,
} from "@chakra-ui/react";

export function Stats() {
  return (
    <Flex
      w="1200px"
      h="155px"
      bgColor="gray.400"
      align="center"
      justify="center"
      textAlign="center"
      rounded="md"
      mt="24"
      mb="16"
    >
      <Stat>
        <StatNumber color="gray.600" fontSize="4xl">
          +3.500
        </StatNumber>
        <StatHelpText color="gray.600">Clientes Atendidos</StatHelpText>
      </Stat>
      <Divider h="85px" w="1px" orientation="vertical" bgColor="gray.600" />
      <Stat>
        <StatNumber color="gray.600" fontSize="4xl">
          +15
        </StatNumber>
        <StatHelpText color="gray.600">Especialistas disponíveis</StatHelpText>
      </Stat>
      <Divider h="85px" w="1px" orientation="vertical" bgColor="gray.600" />
      <Stat>
        <StatNumber color="gray.600" fontSize="4xl">
          +10
        </StatNumber>
        <StatHelpText color="gray.600">Anos no mercado</StatHelpText>
      </Stat>
    </Flex>
  );
}
