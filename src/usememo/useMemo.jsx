// useMemo
import { useMemo, useState } from "react";
import Child from "./Child";

export default function UseMemo() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("부모 컴포넌트가 렌더링 되었습니다");

  const name = useMemo(() => {
    return {
      lastName: "woori",
      firstName: "fisa",
    };
  }, []);

  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      <h1>🧑🏻👩🏻부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={name} />
    </div>
  );
}

// const name = useMemo(() => {
//   return {
//     lastName: "woori",
//     firstName: "fisa",
//   };
// }, []);

// const name = {
//   lastName: "woori",
//   firstName: "fisa",
// };

// const name = "fisa";
