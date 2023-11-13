function Subject(props){
  return <header>
      <h1><a href="/" onClick={function(event){
          event.preventDefault();
          props.onChangeMode();
      }}>{props.title}</a></h1>
          {props.sub}
      </header>
}

export default Subject;