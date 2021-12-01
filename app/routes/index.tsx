import { Button } from "@chakra-ui/react";
import { Link, MetaFunction, useNavigate } from "remix";
import AssetCollection from "~/components/dashboard/assetCollection";
import LiquidityCollection from "~/components/dashboard/liquidityCollection";
import PositionCollection from "~/components/dashboard/positionsCollection";
import StakingCard from "~/components/dashboard/staking";
import TotalBalance from "~/components/dashboard/totalBalance";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "DDashed",
    description: "Your DeFi Dashboard!",
  };
};

export default function Index() {
  const navigate = useNavigate();
  return (
    <>
      <TotalBalance />
      <StakingCard />
      <AssetCollection />
      <PositionCollection />
      <LiquidityCollection />
    </>
  );
}
