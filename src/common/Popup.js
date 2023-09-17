export default function Popup({ list, setIsOpen }) {
  return (
    <>
      <section className="popup">
        {list[0]}
        <button
          onClick={() => {
            setIsOpen(false);
          }}>
          close
        </button>
      </section>
    </>
  );
}

// 컴포넌트를 만들고 App.js에 import해서 사용하는 방법
/*
  1. common 폴더를 만들고 그 안에 Popup.js 파일을 만든다.
  2. Popup.js 파일에 컴포넌트를 만든다.
  3. App.js 파일에 import해서 사용한다.
  *import Popup from "./common/Popup";
  *<Popup />
  *컴포넌트 이름은 대문자로 시작한다.
*/
/*
// 이런 방식으로도 사용할 수 있다.
  export default function Popup(props) {
    return (
      <>
        <section className="popup">{props.list[0]}</section>
      </>
    )
  }
*/
