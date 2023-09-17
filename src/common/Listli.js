export default function Listli({list, setIsOpen, setTitleNo, index}) {
  return (
    <li onClick={()=>{
      setIsOpen(true);
      setTitleNo(index);
    }}>
      <p>{list}</p>
      <i className="fa-solid fa-trash-can"></i>
    </li>
  );
}