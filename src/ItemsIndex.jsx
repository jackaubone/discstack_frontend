
export function ItemsIndex(props) {

  return (
    <div id="items-index">
      <h1>Index</h1>
      {props.items.map((item) => (
        <div key={item.id}>
          <h5>{item.name}</h5>
          <p>
            {item.artist} <br/>
            {item.label} <br />
            {item.release_date} <br />
            {item.description}<br />
          </p>
          <img src={item.image_url} width="300" height="300" />
        </div>
      ))}
    </div>
  )
}