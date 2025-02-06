// useCallback
import { useCallback, useState } from "react";
import Child from "./Child";

export default function UseCallback() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("부모 컴포넌트가 렌더링 되었습니다");

  const callChild = useCallback(() => {
    console.log("사랑한다 내아들");
  }, []);

  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      <h1>🧑🏻👩🏻부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={"fisa"} callChild={callChild} />
    </div>
  );
}

// const callChild = useCallback(() => {
//   console.log("사랑한다 내아들");
// }, []);

// const callChild = () => {
//   console.log("사랑한다 내아들");
// };
