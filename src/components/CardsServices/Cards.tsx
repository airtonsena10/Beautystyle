import { Flex, Grid } from "@chakra-ui/react";
import { Card } from "./Card";

export function Cards() {
  return (
    <Flex mb="24">
      <Grid templateColumns="repeat(3, 1fr)" gap="10">
        <Card
          cardIcon="../../../public/cardIcon.png"
          cardTitle="Terapia Capilar"
          cardText="Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim."
        />
        <Card
          cardIcon="../../../public/cardIcon.png"
          cardTitle="Cortes"
          cardText="Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim."
        />
        <Card
          cardIcon="../../../public/cardIcon.png"
          cardTitle="progressiva"
          cardText="Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim."
        />
        <Card
          cardIcon="../../../public/cardIcon.png"
          cardTitle="cortes masculinos"
          cardText="Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim."
        />
        <Card
          cardIcon="../../../public/cardIcon.png"
          cardTitle="selagem"
          cardText="Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim."
        />
        <Card
          cardIcon="../../../public/cardIcon.png"
          cardTitle="escova"
          cardText="Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim."
        />
      </Grid>
    </Flex>
  );
}
