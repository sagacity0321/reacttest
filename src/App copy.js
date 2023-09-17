// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
    const test = "travel";
    const [list, setList] = useState([
        "송도센트럴파크",
        "파주 프로방스 / 헤이리 마을",
        "춘천 소양강 스카이워크",
    ]);

    const [count, setCount] = useState(0);
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
                        
                    />
                    <button type="button"
                    onClick={()=>{
                        
                    }}>ADD</button>
                </div>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}>
                    숫자올리기
                </button>
                <button
                    onClick={() => {
                        let copy = [...list];
                        copy[0] = "제주도";
                        setList(copy);
                    }}>
                    제목변경
                </button>
                <button
                    onClick={() => {
                        let copy = [...list];
                        copy.sort();
                        setList(copy);
                    }}>
                    가나다순 정렬
                </button>
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
        </div>
    );
}

export default App;
