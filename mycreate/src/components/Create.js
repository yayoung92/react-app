function Create(props){
    return <article>
      <h2>Create</h2>
      <form onSubmit={function(event){
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <input type="text" name="title" placeholder="title"/><p/>
        <textarea name="body" placeholder="body"/><p/>
        <input type="submit" value="Creates"></input>
      </form>
    </article>
  }

  
  export default Create;