import React from "react";
import { setUpAPIClient } from "../services/api";
import { withSRRAuth } from "../utils/withSSRAuth";

const Metrics = () => {
  return (
    <div>
      <h1>Metrics</h1>
    </div>
  );
};

export default Metrics;

export const getServerSideProps = withSRRAuth(
  async (ctx) => {
    const apiClient = setUpAPIClient(ctx);
    const response = await apiClient.get("/me");

    return {
      props: {},
    };
  },
  {
    permissions: ["metrics.list"],
    roles: ["administrator"],
  }
);
