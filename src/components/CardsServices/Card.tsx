import { GridItem, Text, Image } from "@chakra-ui/react";

interface CardProps {
    cardIcon: string
    cardTitle: string;
    cardText: string
}

export function Card({ cardIcon, cardText, cardTitle }: CardProps){
    return(
        <GridItem w="350px" h="200px" bgColor="whiteAlpha.900" p="6" rounded="lg" border="1px" borderColor="green.100">
            <Image src={cardIcon} />
            <Text fontSize="xl" fontWeight="bold" color="gray.700" mt="4" mb="2">
                {cardTitle}
            </Text>
            <Text color="gray.600">
                {cardText}
            </Text>
        </GridItem>
    )
}