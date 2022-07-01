import { useMemo } from "react";

const Index = (numberList: number[]) => {
  return useMemo(
    () =>
      numberList.map((item: number) => {
        console.log(item);
        return Math.pow(item, 2);
      }),
    []
  );
};
export default Index;
