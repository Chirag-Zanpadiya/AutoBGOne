import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(false);

  // background remover kar ke jo image ayi hai wo image
  const [resultImage, setResultImage] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const { getToken } = useAuth();

  // User SignIn hai uska direct package import kiya clerk se
  const { isSignedIn } = useUser();

  // agar image upload karte time agar user login nahi hai toh signin ka pop dikhao
  const { openSignIn } = useClerk();
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

  const removeBG = async (image) => {
    try {
      console.log(`AppContext.jsx :: removeBG :: tryBlock`);
      console.log(image);

      // agar image upload kare time agar user login nahi hai toh pehle login karao
      if (!isSignedIn) {
        toast.error("Please Login First");
        setTimeout(() => {
          openSignIn();
        }, 1000);
        return; //TODO: prevent nagivatin aur setting image
      }
      setImage(image);
      setResultImage(false);

      navigate("/result");

      const token = await getToken();

      const formData = new FormData();
      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/image/remove-bg",
        formData,
        {
          headers: { token },
        }
      );

      if (data.success) {
        setResultImage(data.resultImage);
        data.creditBalance && setCredit(data.creditBalance);
      } else {
        toast.error(data.message);
        data.creditBalance && setCredit(data.creditBalance);

        if (data.creditBalance === 0) {
          navigate("/buy");
        }
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
    image,
    setImage,
    removeBG,
    resultImage,setResultImage
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
