import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("login first");
      void router.push("/23-03-login-check");
    }
  }, []);

  return <Component {...props} />;
};

<>{withAuth(LoginSuccessPage)({ qqq: "철수" })}</>;
