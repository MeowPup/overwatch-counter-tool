import tankHeroes from "../db/tank.js";

export default function CharListItem(props) {

  return (
<div>
  {tankHeroes.map((char) => {
  return <>
  <img key={char.id} src={char.avatar} alt={char.avatar}/> 
  <h2>{char.name}</h2>
  </>
})}
</div>
  )
}