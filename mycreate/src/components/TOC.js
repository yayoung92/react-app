function TOC(props) {
  const lists = []
  for(let i=0; i<props.topics.length; i++){
      let t = props.topics[i];
      lists.push(<li key={t.id}>
          <a id={t.id} href={'/read/' + t.id} onClick={function(event){
              event.preventDefault();
              props.onChangeMode(Number(event.target.id));
          }}>{t.title}</a>
      </li>)
  }
  return <nav>
      <ol>
          {lists}
      </ol>

  </nav>
}

  export default TOC;