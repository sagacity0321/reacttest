export default function Listli({list, setIsOpen, setTitleNo, index, delList}) {
  return (
    <li onClick={()=>{
      setIsOpen(true);
      setTitleNo(index);
    }}>
      <p>{list}</p>
      <i className="fa-solid fa-trash-can" onClick={(e)=>{
        e.stopPropagation(); // 이벤트 버블링을 막는다.
        delList(index);
      }}></i>
    </li>
  );
}
/*
  이벤트 버블링이란?

  이벤트가 발생한 요소에서 가장 가까운 조상 요소까지 이벤트가 전달된다.
  
  예를 들어, 버튼을 클릭하면 버튼에 연결된 이벤트가 발생하고,
  이어서 버튼이 속한 div, body, html, document까지 이벤트가 전달된다.

  e.stopPropagation()이 없으면,
  icon 요소를 클릭했을 때, li 요소의 이벤트까지 전달되어
  li 요소의 이벤트가 실행되고, li 요소의 이벤트가 실행되면서
  Popup 컴포넌트가 열리게 된다.
*/