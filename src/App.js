// //https://ko.react.dev/learn

// function Asd() {
//   //버튼 컴포넌트 대문자로 해야함, 소문자로 시작하는 경우 HTML 태그로 간주함
//   return <button>버튼입니닷</button>;
// }

// export default function MyApp() {
//   // 얘는 상관이 없나?? 알수 없음, export - 이 컴포넌트를 다른 파일에서 기본으로 가져올 수 있도록 내보내기 ex) import MyApp from './MyApp'
//   return (
//     <div>
//       {' '}
//       {/*여러개의 태그를 반환할 수 없기 때문에 같이 공유되는 부모로 감싸야함*/}
//       <h1>리액트 시작하기</h1>
//       <Asd /> {/* 다른 컴포넌트 안에 중첩하기 */}
//     </div>
//   );
// }

// //두개의 별도 컴포넌트로 작성되어 코드 재사용성과 유지보수성이 높아짐
// // 위 마크업 문법을 JSX, 리액트 개발을 직관적이고 간단하게 만들어주는 문법, HTML과 비슷한 구조를 가지면서 jsp의 기능을 활용할 수 있게 해줌

// const user = {
//   name: '김민성',
//   imgUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imgSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="profile"
//         src={user.imgUrl}
//         alt={user.name + '이미지 못 가져올시'}
//         style={{
//           width: user.imgSize,
//           height: user.imgSize,
//         }}
//       />
//     </>
//   );
// }

// const products = [
//   { title: '곤충', isFruit: false, id: 1 },
//   { title: '동물', isFruit: false, id: 2 },
//   { title: '과일', isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map((products) => (
//     <li
//       key={products.id}
//       style={{
//         color: products.isFruit ? 'magenta' : 'green', //true 이면 1 아니면 2로 색상을 결정
//       }}
//     >
//       {products.title}
//     </li>
//   ));
//   return <ul>{listItems}</ul>; // 리턴하는 값을 화면에 보여줌
// }

// import { useState } from 'react'; //컴포넌트가 특정 정보를 기억하려고 할 때 추가

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton1 />
//       <MyButton1 /> 버튼 2개 생성
//     </div>
//   );
// }

// function MyButton1() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>Clicked {count} times</button>; //버튼 만들기
// }

import React from "react";
import styles from "./test.module.css" // 패키지 파일이 아니라 ./로 로컬 파일임을 명시

export default function MyApp(){
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>테스트사이트</h1>

      <input type="text" placeholder="입력창입니다" className={styles.input}></input>

    </div>
  );
}