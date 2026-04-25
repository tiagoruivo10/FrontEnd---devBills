import { useEffect } from "react";
import { api } from "../services/Api";

const Dashboard = () => {
  useEffect(() => {
    async function getTransactions() {
      const response = await api.get('/transactions');
    }

    getTransactions();
  }, []);

  return (
    <div>
      <h1>dashboard</h1>
    </div>
  );
};

export default Dashboard;
