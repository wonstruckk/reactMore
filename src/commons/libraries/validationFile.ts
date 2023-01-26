export const checkValidationFile = (file?: File) => {
  if (!file?.size) {
    alert("파일없어요");
    return false;
  }
  // 5mb를 뜻함. 바이트 곱하기 키로바이트
  if (file.size > 5 * 1024 * 1024) {
    alert("너무크다");
    return false;
  }

  // 또는 Input accept에서 가능하다.
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg, png만 가능합니다");
    return false;
  }

  return true;
};
