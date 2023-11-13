
import './App.css';
import TOC from "./components/TOC";
import Content from "./components/Comtent";
import Subject from "./components/Subject";
import Create from "./components/Create";
//import Update from "./components/Update";
import React, { useState } from 'react';

function Update(props){
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={function(event){
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <input type="text" name="title" placeholder="title" value={title} onChange={event=>{
          setTitle(event.target.value);
      }}/><p/>
      <textarea name="body" placeholder="body" value={body} onChange={event=>{
          setBody(event.target.value);
      }}/><p/>
      <input type="submit" value="Update"></input>
    </form>
  </article>
}
function App() {
  const [mode, setMode] = useState('welcome');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'js is ...'}
  ]);

  let content = null;
  let contextControll = null;
  if(mode === 'welcome'){
    content = <Content title="welcome" body="welcome REACT"></Content>
  } else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i < topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Content title={title} body={body}></Content>
    contextControll = <>
      <li>< a href={'/update/'+id} onClick={function(event){
        event.preventDefault();
        setMode('UPDATE');
      }}>Update</a></li>
      <li><input type="button" value="Delte" onClick={()=>{
        const newTopics = []
        for(let i=0; i<topics.length; i++){
          if(topics[i].id !== id){
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('welcome');
      }}/></li>
    </>
  } else if(mode === 'CREATE'){
    content = <Create onCreate={function(_title, _body){
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  } else if(mode === 'UPDATE'){
    let title, body = null;
    for(let i=0; i < topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      const newTopics = [...topics]
      const updatedTopic = {id:id, title:title, body:body}
      for(let i=0; i<newTopics.length; i++){
        if(newTopics[i].id === id){
          newTopics[i] = updatedTopic;
          break;
        } 
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }

  return (
    <div>
      <Subject title="WEB" sub="world wide web!" onChangeMode={function(){
        setMode('welcome');
      }}></Subject>
      <TOC topics={topics} onChangeMode={function(_id){
        setMode('READ');
        setId(_id);
      }}></TOC>
      {content}
      <ul>
        <li><a href="/create" onClick={function(event){
          event.preventDefault();
          setMode('CREATE');
        }}>Create</a></li>
        {contextControll}
      </ul>
    </div>

  );
}

export default App;
