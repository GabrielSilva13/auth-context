import React, { useContext, useEffect } from "react";
import { Can } from "../components/Can";
import { AuthContext } from "../contexts/AuthContext";
import { setUpAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSRRAuth } from "../utils/withSSRAuth";

const Dashboard = () => {
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/me")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Bem vindo(a) {user?.email}</h1>

      <button onClick={signOut}>Sign Out</button>

      <Can permissions={["metrics.list"]}>
        <h2>Você pode ver isso</h2>
      </Can>
    </div>
  );
};

export default Dashboard;

export const getServerSideProps = withSRRAuth(async (ctx) => {
  const apiClient = setUpAPIClient(ctx);
  const response = await apiClient.get("/me");

  return {
    props: {},
  };
});
