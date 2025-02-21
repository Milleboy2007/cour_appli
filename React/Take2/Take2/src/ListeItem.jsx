import './listeItem.css'

function ListeItem(props) {

  return (
    <>
        <div class="list-item">
      <img src={props.image}/>
      <div>
        <h3>{props.titre}</h3>
        <p>{props.p}</p>
      </div>
    </div>
    </>
  )
}

export default ListeItem