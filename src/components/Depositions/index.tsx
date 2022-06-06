import { Box, Grid, GridItem, Text, Image, Stack } from "@chakra-ui/react";
import "./style.css";

export function Depositions() {
  return (
    <>
      <Text
        fontSize="2xl"
        marginTop="15"
        color="white.700"
        fontWeight="bold"
        align="center"
        justify="center"
        mt="10"
        mb="7"
      >
        Depoimentos de quem já passou por aqui
      </Text>
      <Grid
        padding="2.7rem"
        alignContent="center"
        justifyContent="center"
        h="500px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 18rem)"
        gap={5}
      >
        <GridItem
          colSpan={2}
          bg="blackAlpha.600"
          borderRadius={6}
          border=" p solid white"
        >
          <Box margin="15">
            <svg
              width="45"
              height="31"
              viewBox="0 0 45 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5263 11.7111C17.5263 14.237 16.9539 16.5525 15.8092 18.6574C14.7039 20.7241 13.3618 22.5228 11.7829 24.0537C10.2039 25.6228 8.4671 27.0389 6.57237 28.3019C4.67763 29.5265 3.15789 30.4259 2.01316 31L0 27.613C1.61842 26.6944 3.15789 25.7568 4.61842 24.8C6.11842 23.8049 7.26316 22.8673 8.05263 21.987C9.11842 20.8389 9.9671 19.6525 10.5987 18.4278C11.2303 17.1648 11.625 15.5191 11.7829 13.4907H8.94079C6.45395 13.4907 4.51974 12.8784 3.13816 11.6537C1.75658 10.429 1.06579 8.72593 1.06579 6.54444C1.06579 4.97531 1.69737 3.50185 2.96053 2.12407C4.22368 0.708025 5.94079 0 8.11184 0C11.4671 0 13.875 1.09074 15.3355 3.27222C16.7961 5.41543 17.5263 8.2284 17.5263 11.7111Z"
                fill="#8257E5"
              />
              <path
                d="M45 11.7111C45 14.237 44.4276 16.5525 43.2829 18.6574C42.1776 20.7241 40.8355 22.5228 39.2566 24.0537C37.6776 25.6228 35.9408 27.0389 34.0461 28.3019C32.1513 29.5265 30.6316 30.4259 29.4868 31L27.4737 27.613C29.0921 26.6944 30.6316 25.7568 32.0921 24.8C33.5921 23.8049 34.7368 22.8673 35.5263 21.987C36.5921 20.8389 37.4408 19.6525 38.0724 18.4278C38.7039 17.1648 39.0987 15.5191 39.2566 13.4907H36.4145C33.9276 13.4907 31.9934 12.8784 30.6118 11.6537C29.2303 10.429 28.5395 8.72593 28.5395 6.54444C28.5395 4.97531 29.1711 3.50185 30.4342 2.12407C31.6974 0.708025 33.4145 0 35.5855 0C38.9408 0 41.3487 1.09074 42.8092 3.27222C44.2697 5.41543 45 8.2284 45 11.7111Z"
                fill="#8257E5"
              />
            </svg>
            <Text as="cite" marginTop="100">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim.
            </Text>
          </Box>
          <Text color="white" fontWeight="bold" mt="3">
            <Stack direction="row" marginLeft="5">
              <Image
                flexDirection="row"
                borderRadius="full"
                boxSize="30px"
                src="user.png"
                alt="Dan Abramov"
              />
              <h4>Matheus Souza</h4>
            </Stack>
          </Text>
        </GridItem>
        <GridItem
          w="250"
          h="200"
          colStart={5}
          colEnd={3}
          bg="blackAlpha.600"
          borderRadius={6}
          border="p solid white"
        >
          <Box margin="15">
            <svg
              width="45"
              height="31"
              viewBox="0 0 45 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5263 11.7111C17.5263 14.237 16.9539 16.5525 15.8092 18.6574C14.7039 20.7241 13.3618 22.5228 11.7829 24.0537C10.2039 25.6228 8.4671 27.0389 6.57237 28.3019C4.67763 29.5265 3.15789 30.4259 2.01316 31L0 27.613C1.61842 26.6944 3.15789 25.7568 4.61842 24.8C6.11842 23.8049 7.26316 22.8673 8.05263 21.987C9.11842 20.8389 9.9671 19.6525 10.5987 18.4278C11.2303 17.1648 11.625 15.5191 11.7829 13.4907H8.94079C6.45395 13.4907 4.51974 12.8784 3.13816 11.6537C1.75658 10.429 1.06579 8.72593 1.06579 6.54444C1.06579 4.97531 1.69737 3.50185 2.96053 2.12407C4.22368 0.708025 5.94079 0 8.11184 0C11.4671 0 13.875 1.09074 15.3355 3.27222C16.7961 5.41543 17.5263 8.2284 17.5263 11.7111Z"
                fill="#8257E5"
              />
              <path
                d="M45 11.7111C45 14.237 44.4276 16.5525 43.2829 18.6574C42.1776 20.7241 40.8355 22.5228 39.2566 24.0537C37.6776 25.6228 35.9408 27.0389 34.0461 28.3019C32.1513 29.5265 30.6316 30.4259 29.4868 31L27.4737 27.613C29.0921 26.6944 30.6316 25.7568 32.0921 24.8C33.5921 23.8049 34.7368 22.8673 35.5263 21.987C36.5921 20.8389 37.4408 19.6525 38.0724 18.4278C38.7039 17.1648 39.0987 15.5191 39.2566 13.4907H36.4145C33.9276 13.4907 31.9934 12.8784 30.6118 11.6537C29.2303 10.429 28.5395 8.72593 28.5395 6.54444C28.5395 4.97531 29.1711 3.50185 30.4342 2.12407C31.6974 0.708025 33.4145 0 35.5855 0C38.9408 0 41.3487 1.09074 42.8092 3.27222C44.2697 5.41543 45 8.2284 45 11.7111Z"
                fill="#8257E5"
              />
            </svg>
            <Text as="cite">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim.
            </Text>
          </Box>
          <Text color="white" fontWeight="bold" mt="3">
            <Stack direction="row" marginLeft="16.5">
              <Image
                flexDirection="row"
                borderRadius="full"
                boxSize="30px"
                src="user.png"
                alt="Dan Abramov"
              />
              <h4>matheus Souza</h4>
            </Stack>
          </Text>
        </GridItem>
        <GridItem
          w="330"
          h="200"
          colSpan={2}
          borderRadius={6}
          bg="blackAlpha.600"
        >
          <Box margin="15">
            <svg
              width="45"
              height="31"
              viewBox="0 0 45 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5263 11.7111C17.5263 14.237 16.9539 16.5525 15.8092 18.6574C14.7039 20.7241 13.3618 22.5228 11.7829 24.0537C10.2039 25.6228 8.4671 27.0389 6.57237 28.3019C4.67763 29.5265 3.15789 30.4259 2.01316 31L0 27.613C1.61842 26.6944 3.15789 25.7568 4.61842 24.8C6.11842 23.8049 7.26316 22.8673 8.05263 21.987C9.11842 20.8389 9.9671 19.6525 10.5987 18.4278C11.2303 17.1648 11.625 15.5191 11.7829 13.4907H8.94079C6.45395 13.4907 4.51974 12.8784 3.13816 11.6537C1.75658 10.429 1.06579 8.72593 1.06579 6.54444C1.06579 4.97531 1.69737 3.50185 2.96053 2.12407C4.22368 0.708025 5.94079 0 8.11184 0C11.4671 0 13.875 1.09074 15.3355 3.27222C16.7961 5.41543 17.5263 8.2284 17.5263 11.7111Z"
                fill="#8257E5"
              />
              <path
                d="M45 11.7111C45 14.237 44.4276 16.5525 43.2829 18.6574C42.1776 20.7241 40.8355 22.5228 39.2566 24.0537C37.6776 25.6228 35.9408 27.0389 34.0461 28.3019C32.1513 29.5265 30.6316 30.4259 29.4868 31L27.4737 27.613C29.0921 26.6944 30.6316 25.7568 32.0921 24.8C33.5921 23.8049 34.7368 22.8673 35.5263 21.987C36.5921 20.8389 37.4408 19.6525 38.0724 18.4278C38.7039 17.1648 39.0987 15.5191 39.2566 13.4907H36.4145C33.9276 13.4907 31.9934 12.8784 30.6118 11.6537C29.2303 10.429 28.5395 8.72593 28.5395 6.54444C28.5395 4.97531 29.1711 3.50185 30.4342 2.12407C31.6974 0.708025 33.4145 0 35.5855 0C38.9408 0 41.3487 1.09074 42.8092 3.27222C44.2697 5.41543 45 8.2284 45 11.7111Z"
                fill="#8257E5"
              />
            </svg>

            <Text as="cite" text-align="left" margin-left="150">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim.
            </Text>
          </Box>
          <Text color="white" fontWeight="bold" mt="3">
            <Stack direction="row" margin="16.5">
              <Image
                flexDirection="row"
                borderRadius="full"
                boxSize="30px"
                src="user.png"
                alt="Dan Abramov"
              />
              <h4>matheus Souza</h4>
            </Stack>
          </Text>
        </GridItem>
        <GridItem
          w="330"
          h="200"
          colSpan={2}
          bg="blackAlpha.600"
          borderRadius={6}
          border="p solid white"
        >
          <Box margin="15">
            <svg
              width="45"
              height="31"
              viewBox="0 0 45 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5263 11.7111C17.5263 14.237 16.9539 16.5525 15.8092 18.6574C14.7039 20.7241 13.3618 22.5228 11.7829 24.0537C10.2039 25.6228 8.4671 27.0389 6.57237 28.3019C4.67763 29.5265 3.15789 30.4259 2.01316 31L0 27.613C1.61842 26.6944 3.15789 25.7568 4.61842 24.8C6.11842 23.8049 7.26316 22.8673 8.05263 21.987C9.11842 20.8389 9.9671 19.6525 10.5987 18.4278C11.2303 17.1648 11.625 15.5191 11.7829 13.4907H8.94079C6.45395 13.4907 4.51974 12.8784 3.13816 11.6537C1.75658 10.429 1.06579 8.72593 1.06579 6.54444C1.06579 4.97531 1.69737 3.50185 2.96053 2.12407C4.22368 0.708025 5.94079 0 8.11184 0C11.4671 0 13.875 1.09074 15.3355 3.27222C16.7961 5.41543 17.5263 8.2284 17.5263 11.7111Z"
                fill="#8257E5"
              />
              <path
                d="M45 11.7111C45 14.237 44.4276 16.5525 43.2829 18.6574C42.1776 20.7241 40.8355 22.5228 39.2566 24.0537C37.6776 25.6228 35.9408 27.0389 34.0461 28.3019C32.1513 29.5265 30.6316 30.4259 29.4868 31L27.4737 27.613C29.0921 26.6944 30.6316 25.7568 32.0921 24.8C33.5921 23.8049 34.7368 22.8673 35.5263 21.987C36.5921 20.8389 37.4408 19.6525 38.0724 18.4278C38.7039 17.1648 39.0987 15.5191 39.2566 13.4907H36.4145C33.9276 13.4907 31.9934 12.8784 30.6118 11.6537C29.2303 10.429 28.5395 8.72593 28.5395 6.54444C28.5395 4.97531 29.1711 3.50185 30.4342 2.12407C31.6974 0.708025 33.4145 0 35.5855 0C38.9408 0 41.3487 1.09074 42.8092 3.27222C44.2697 5.41543 45 8.2284 45 11.7111Z"
                fill="#8257E5"
              />
            </svg>

            <Text as="cite">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim.
            </Text>
          </Box>
          <Text color="white" fontWeight="bold" mt="3">
            <Stack direction="row" margin="16.5">
              <Image
                flexDirection="row"
                borderRadius="full"
                boxSize="30px"
                src="user.png"
                alt="Dan Abramov"
              />
              <h4>mathues Souza</h4>
            </Stack>
          </Text>
        </GridItem>
      </Grid>
    </>
  );
}