// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Popup from "./common/Popup";
import Listli from "./common/Listli";

function App() {
  const [list, setList] = useState([
    "송도센트럴파크",
    "파주 프로방스 / 헤이리 마을",
    "춘천 소양강 스카이워크",
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [titleNo, setTitleNo] = useState(0);
  const [inText, setInText] = useState("");

  const PressEnter = (func) => {
    if (window.event.keyCode === 13) {
      switch (func) {
        case "writeList": writeList(); 
          break;
        default: break;
      }
    }
  };

  const writeList = () => {
    if (inText === "") {
      alert("내용을 입력해주세요");
    } else {
      let copyList = [...list];
      copyList.unshift(inText);
      setList(copyList);
      setInText("");
    }
  };

  // function writeList() {
  //   if (inText === "") {
  //     alert("내용을 입력해주세요");
  //   } else {
  //     // setList([...list, inText]);
  //     let copyList = [...list];
  //     // copyList.push(inText);
  //     copyList.unshift(inText);
  //     setList(copyList);
  //     setInText("");
  //   }
  // }

  const delList = (index) => {
    let copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  };

  return (
    <div className="wrap">
      <header>
        <h1>
          <span>가자</span>
          <span>여행</span>
        </h1>
      </header>
      <main>
        <div className="textInput">
          <input
            type="text"
            placeholder="가고싶은 여행지를 입력하세요"
            value={inText}
            onChange={(e) => {
              e.preventDefault();
              setInText(e.target.value);
            }}
            onKeyUp={(e) => {PressEnter('writeList')}}
          />
          <button type="button" onClick={writeList}>
            ADD
          </button>
        </div>
        {/* <button
          onClick={() => {
            setIsOpen(true);
          }}>
          열기
        </button>
        <button
          onClick={() => {
            setIsOpen(false);
          }}>
          닫기
        </button>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          toggle
        </button> */}
        <div className="listCountName">
          Total
          <span id="listCountNumber">{list.length}</span>
        </div>
        {list.length >= 1 ? (
          <ul className="list">
            {list.map((list, i) => {
              return (
                <Listli
                  key={i}
                  list={list}
                  setIsOpen={setIsOpen}
                  setTitleNo={setTitleNo}
                  index={i}
                  delList={delList}
                />
              );
            })}
            {/* a는 배열값, i는 인덱스 */}
          </ul>
        ) : (
          <p >Empty List</p>  
        )
        }
      </main>
      {isOpen === false ? null : (
        <Popup list={list} setIsOpen={setIsOpen} titleNo={titleNo} />
      )}
    </div>
  );
}

export default App;
