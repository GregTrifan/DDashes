import {
  Box,
  useColorModeValue,
  Text,
  Heading,
  VStack,
  Progress,
} from "@chakra-ui/react";
import React from "react";

const TotalBalance = () => {
  const gradient = useColorModeValue(
    "linear(to-t, #E3FFE7D0, #D9E7FFC2)",
    "linear(to-t, #80D0C7D0, #0094E9D8)"
  );
  return (
    <Box
      mx="auto"
      maxW={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw" }}
      spacing={0}
      rounded="md"
      bg={useColorModeValue("#d9e7ff", "#0093E9")}
    >
      <Box px={4} pt={6}>
        <Text fontWeight={600}>Portfolio Value</Text>
      </Box>

      <Box p={4} minH="100px" bgGradient={gradient} rounded="md">
        <VStack alignItems="start">
          <Text opacity={0.6}>Net Worth</Text>
          <Heading fontSize="4xl" fontWeight="300">
            69.42$
          </Heading>
        </VStack>
        <Progress
          value={91}
          rounded="sm"
          size="sm"
          my="2"
          colorScheme="green"
        />
        <Text fontWeight={500} opacity={0.8}>
          9% Supplied, 91% Hodled{" "}
        </Text>
      </Box>
    </Box>
  );
};

export default TotalBalance;
