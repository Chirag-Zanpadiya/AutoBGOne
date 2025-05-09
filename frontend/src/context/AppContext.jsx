import { useAuth } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { getToken } = useAuth();

  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: {
          token,
        },
      });

      //   data ke andar ka success message true hai toh
      if (data.success) {
          console.log(`AppContext.jsx :: loadCreditsData :: ${data.credits}`);
        setCredit(data.credits);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
