// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Popup from "./common/Popup";

function App() {
  const test = "travel";
  const [list, setList] = useState([
    "송도센트럴파크",
    "파주 프로방스 / 헤이리 마을",
    "춘천 소양강 스카이워크",
  ]);

  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wrap">
      <header>
        <h1>
          <span>가자</span>
          <span>여행</span>
        </h1>
      </header>
      <main>
        <button
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
          {/* 열기 닫기 모두 가능 */}
        </button>
        <div className="textInput">
          <input type="text" placeholder="가고싶은 여행지를 입력하세요" />
          <button type="button">ADD</button>
        </div>
        <div className="listCountName">
          Total
          <span id="listCountNumber">{count}</span>
        </div>
        <ul className="list">
          <li>
            <p>{list[0]}</p>
            <i className="fa-solid fa-trash-can"></i>
          </li>
          <li>
            <p>{list[1]}</p>
            <i className="fa-solid fa-trash-can"></i>
          </li>
          <li>
            <p>{list[2]}</p>
            <i className="fa-solid fa-trash-can"></i>
          </li>
        </ul>
      </main>
      {isOpen === false ? null : <Popup list={list} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
