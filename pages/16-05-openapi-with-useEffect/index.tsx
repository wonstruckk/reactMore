import axios from "axios";
import { useEffect } from "react";

export default function openapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    void fetchDog();
  }, []);

  return (
    <>
      <button>요청하기</button>
      <img src="{dogUrl}" alt="" />
    </>
  );
}
