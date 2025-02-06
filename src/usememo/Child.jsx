import { memo } from "react";

const Child = ({ name }) => {
  for (let i = 0; i < 2_000_000_000; i++) {}

  console.log("자식 컴포넌트가 렌더링 되었습니다");

  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      <h2>👶🏻자식</h2>
      <p>성: {name.lastName}</p>
      <p>이름: {name.firstName}</p>
      {/* <p>이름: {name}</p> */}
    </div>
  );
};

export default memo(Child);
