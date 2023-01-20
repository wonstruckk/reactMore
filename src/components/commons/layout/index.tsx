import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const HIDDDEN_HEADERS = ["/12-02-library-star"];

interface ILayout {
  children: JSX.Element;
}

// const qqq = {
// height :"500px"
// }

export default function Layout(props: ILayout) {
  const router = useRouter();

  const isHiddenHeader = HIDDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      {/* style의 중괄호가 두개인 이유는, 자바스크립트의 중괄호와 객체의 중괄호 두개이기 때문이다. */}
      <div style={{ height: "150px", display: "flex" }}>
        <div style={{ width: "30%", backgroundColor: "red" }}>사이드바</div>

        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
