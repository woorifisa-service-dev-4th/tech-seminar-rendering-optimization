import { memo } from "react";

const Child = ({ name, age }) => {
  for (let i = 0; i < 2_000_000_000; i++) {}
  console.log("자식 컴포넌트가 렌더링 되었습니다");

  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      <h2>👶🏻자식</h2>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  );
};

export default memo(Child);
// export default Child;
