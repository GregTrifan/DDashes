import {
  Box,
  Center,
  useColorModeValue,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import type { MetaFunction } from "remix";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "DDashed",
    description: "Your DeFi Dashboard!",
  };
};

export default function Index() {
  return (
    <Center>
      <VStack
        minW="80vw"
        rounded="md"
        bgGradient="linear(to-b,blue.600, transparent )"
        spacing={0}
      >
        <Box
          p={4}
          width="100%"
          bgColor={useColorModeValue("blue.300", "blue.700")}
        >
          Portfolio Value
        </Box>
        <Box p={4} width="100%" minH="100px">
          <VStack alignItems="start">
            <Text color={useColorModeValue("gray.600", "gray.500")}>
              Net Worth
            </Text>
            <Heading fontSize="4xl" fontWeight="300">
              69$
            </Heading>
          </VStack>
        </Box>
      </VStack>
    </Center>
  );
}
