# React 렌더링 최적화 실습 코드

랜더링 최적화 기법 중 React.memo, useMemo, useCallback에 대한 실습 코드 레포지토리입니다.

## [🔗 발표자료 링크](https://docs.google.com/presentation/d/171O4AV9gFSJr1CGCurlmjU6wFdRpsGCxKpko2qKPt88/edit#slide=id.g32cccd23947_3_524)

## 팀원 소개

|                                                                               서채연                                                                               |                                                            윤선영                                                             |                                                        황유환                                                        |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
| <a href="https://github.com/seocylucky"> <img width="160px" src="https://github.com/Draw-Draw/.github/assets/94633589/503d8975-fa59-460d-bafd-37a8c0830aff" > </a> | <a href="https://github.com/yunsy1103"> <img width="160px" src="https://avatars.githubusercontent.com/u/127287492?v=4" > </a> | <a href="https://github.com/yxhwxn"> <img width="160px" src="https://avatars.githubusercontent.com/u/87745916?v=4" > |

## React.memo

<details>
<summary>React.memo 예제 코드</summary>

### 부모 컴포넌트

```js
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
```

### 자식 컴포넌트

```js
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
```

</details>

## useMemo

<details>
<summary>useMemo 예제 코드</summary>

### 부모 컴포넌트

```js
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
```

### 자식 컴포넌트

```js
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
```

</details>

## useCallback

<details>
<summary>useCallback 예제 코드</summary>

### 부모 컴포넌트

```js
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
```

### 자식 컴포넌트

```js
import { memo } from "react";

const Child = ({ name, callChild }) => {
  for (let i = 0; i < 2_000_000_000; i++) {}

  console.log("자식 컴포넌트가 렌더링 되었습니다");

  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      <h2>👶🏻자식</h2>
      <p>이름: {name}</p>
      <button onClick={callChild}>나 사랑해 엄마아빠?</button>
    </div>
  );
};

export default memo(Child);
```

</details>
