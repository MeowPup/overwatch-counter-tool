import supportHeroes from "../db/support.js";

export default function CharListItem(props) {

  return (
<div>
  {supportHeroes.map((char) => {
  return <>
  <img key={char.id} src={char.avatar} alt={char.avatar}/> 
  <h2>{char.name}</h2>
  </>
})}
</div>
  )
}