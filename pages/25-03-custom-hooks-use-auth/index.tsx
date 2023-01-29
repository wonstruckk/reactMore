import { useAuth } from "../../src/components/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage() {
  useAuth();

  return <div>프로필페이지입니다.</div>;
}
