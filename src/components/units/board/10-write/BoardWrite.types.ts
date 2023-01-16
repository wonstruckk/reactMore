import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IMyVariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}

export interface IBoardWriteUiProps {
  graphQlHandler: () => void;
  onClickUpdate: () => void;
  writerHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  titleHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  contentsHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  myColor: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBlueButtonProps {
  aaa: string;
  color: string;
  ccc: boolean;
}
