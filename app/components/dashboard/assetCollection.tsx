import {
  Avatar,
  Box,
  Button,
  chakra,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const AssetCollection = () => {
  // TODO: Replace with actual data
  const data = [
    { name: "MATIC", price: 1.3, amount: 69 },
    { name: "SUSHI", price: 12.5, amount: 29 },
    { name: "UNI", price: 21.7, amount: 49 },
    { name: "GALA", price: 0.8, amount: 4569 },
  ];
  return (
    <Box
      mt="8"
      mx="auto"
      shadow="lg"
      py={6}
      maxW={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw" }}
      spacing={0}
      rounded="md"
      bg={useColorModeValue("white", "#121a1f")}
    >
      <Text px={4} fontWeight={600}>
        Assets
      </Text>
      <Box
        mt="4"
        py="2"
        rounded="lg"
        mx="4"
        border="1px"
        borderColor={useColorModeValue("#efefef", "#293035")}
        bg={{ md: useColorModeValue("white", "#121a1f") }}
      >
        <Stack direction={{ base: "column" }} w="full">
          {data.map((asset, pid) => {
            return (
              <>
                <Flex pr={10} pl={2} key={pid}>
                  <Avatar mx="auto" mr={3} />
                  <VStack alignItems="start">
                    <Text opacity={0.6}>{asset.name}</Text>
                    <Heading fontSize="lg" fontWeight="300">
                      {asset.price}$
                    </Heading>
                  </VStack>
                  <Spacer />
                  <VStack alignItems="end" mx="auto">
                    <Heading fontSize="lg" fontWeight="600">
                      {(asset.amount * asset.price).toFixed(2)}$
                    </Heading>
                    <Text opacity={0.6}>{asset.amount}</Text>
                  </VStack>
                </Flex>
                {data[pid] !== data[data.length - 1] ? <Divider /> : ""}
              </>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default AssetCollection;
