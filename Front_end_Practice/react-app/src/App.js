import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// 리액트에서 사용자 정의 함수를 만들 때에는 대문자로 시작해야한다
// 리액트에서는 사용자 정의 태그라고 하지 않고 컴포넌트라고 한다.
// 리액트에서는 속성을 prop이라고 한다.
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
// function(event) 는 (event)=>로 축약가능
function Header(props) {
  return <header>
    <h1><a href='/read/1' onClick={event => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = []

  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={(event) => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
    //반복문 안에서 고유한 키 값을 가지고 있어야 한다.
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function App() {
  // const _mode = use('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');

  const [id, setId] = useState(null);

  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ]

  let content = null;

  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <div>
      <Header title='WEB' onChangeMode={() => {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
