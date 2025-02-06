// React.memo
import { useState } from "react";
import Child from "./Child";

export default function ReactMemo() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log("부모 컴포넌트가 렌더링 되었습니다");

  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      <h1>🧑🏻👩🏻부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <button onClick={incrementChildAge}>자녀 나이 증가</button>
      <Child name={"fisa"} age={childAge} />
    </div>
  );
}
