function Asd(){ //버튼 컴포넌트 대문자로 해야함, 소문자로 시작하는 경우 HTML 태그로 간주함
  return(
    <button>버튼입니닷</button>
  );
}

export default function MyApp(){ // 얘는 상관이 없나?? 알수 없음, export - 이 컴포넌트를 다른 파일에서 기본으로 가져올 수 있도록 내보내기 ex) import MyApp from './MyApp'
  return(
    <div>
      <h1>리액트 시작하기</h1>
      <Asd/> {/* 다른 컴포넌트 안에 중첩하기 */}
    </div>
  );
}

//두개의 별도 컴포넌트로 작성되어 코드 재사용성과 유지보수성이 높아짐
///테스트