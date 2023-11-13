function Content(props) {
  return <article>
             <h2>{props.title}</h2>
              {props.body}
          </article>

}

  export default Content;