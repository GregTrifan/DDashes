import {
  Box,
  Center,
  useColorModeValue,
  VStack,
  Text,
  Heading,
  Progress,
  Tooltip,
  useColorMode,
  SimpleGrid,
} from "@chakra-ui/react";
import type { MetaFunction } from "remix";
import AssetCollection from "~/components/dashboard/assetCollection";
import TotalBalance from "~/components/dashboard/totalBalance";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "DDashed",
    description: "Your DeFi Dashboard!",
  };
};

export default function Index() {
  return (
    <>
      <TotalBalance />

      <AssetCollection />
    </>
  );
}
