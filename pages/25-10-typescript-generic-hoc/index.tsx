import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

// prettier-ignore
export const withAuth = (Component: ComponentType) => <P extends {}>(props: P) => {
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
