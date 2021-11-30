import React from "react";
import { LoaderFunction, useLoaderData } from "remix";
import AssetCollection from "~/components/dashboard/assetCollection";
import LiquidityCollection from "~/components/dashboard/liquidityCollection";
import PositionCollection from "~/components/dashboard/positionsCollection";
import StakingCard from "~/components/dashboard/staking";
import TotalBalance from "~/components/dashboard/totalBalance";

export let loader: LoaderFunction = async ({ params }) => {
  // retrieve address
  return { param: params.address };
};

const AddressWatchPage = () => {
  let data = useLoaderData();
  return (
    <>
      <TotalBalance />
      <StakingCard />
      <AssetCollection />
      <PositionCollection />
      <LiquidityCollection />
    </>
  );
};

export default AddressWatchPage;
