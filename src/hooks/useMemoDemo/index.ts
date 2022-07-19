import { useMemo } from "react";

const Index = (numberList: number[]) => {
  return useMemo(
    () =>
      numberList.map((item: number) => {
        return Math.pow(item, 2);
      }),
    [numberList]
  );
};
export default Index;
