import './App.css'
import { Header } from './components/chap07/header'
import { Main } from './components/chap07/Main'
import { LoginUserProvier } from './context/LoginUserContext'
// import { UserList } from './components/chap06/UserList'
// import { CounterControls } from './components/chap06/CounterControls'
// import { CounterControls2 } from './components/chap06/CounterControls2'
// import { FruitManager } from './components/chap05/FruitManager'
// import { FruitManagerWithoutMemo } from './components/chap05/FruitManagerWithoutMemo'
// import { TextInputWithFocusButton } from './components/chap05/TextInputWithFocusButton'
// import { UserList } from './components/chap04/UserList'
// import { CountUp } from './components/chap05/CountUp'
// import { ToggleDocumentKeyListener } from './components/chap04/ToggleDocumentKeyListener'
// import { Timer } from './components/chap04/Timer'
// import { UserDetail } from './components/chap04/UserDetail'
// import { CountUp } from './components/chap03/CountUp'
// import { UserForm } from './components/chap03/UserForm'
// import { UserList } from './components/chap03/UserList'
// import { Box } from './components/chap02/Box'
// import { Message } from './components/chap02/Message'
// import { Notification } from './components/chap02/Notification'
// import { RemainingTickets } from './components/chap02/RemainingTickets'
// import { StatusMessage } from './components/chap02/StatusMessage'
// import { UserCard } from './components/chap02/UserCard'
// import { UserList } from './components/chap02/UserList'
// import { Greeting } from './components/chap01/Greeting';
// import { ImageSection } from './components/chap01/ImageSection';
// import { UserGreeting } from './components/chap01/UserGreeting';

function App() {
  return (
    <>
      {/* <Greeting />
      <ImageSection />
      <UserGreeting /> */}
      {/* <UserCard name="taro" role="エンジニア"/>
      <UserCard name="jiro" role="デザイナー"/>
      <Box>テキストだけ渡す</Box>
      <Box>
        <h3>見出し</h3>
        <p>複数の要素もchildrenとして渡せる。</p>
      </Box>
      <Notification count={0}/>
      <Notification count={10}/>
      <Message display={true} />
      <Message display={false} />
      <StatusMessage status="loading"/>
      <StatusMessage status="success"/>
      <StatusMessage status="error"/>
      <RemainingTickets remaining={3} userName="taro"/>
      <RemainingTickets remaining={0} />
      <RemainingTickets userName="jiro"/> */}
      {/* <UserList /> */}
      {/* <CountUp />
      <UserForm />
      <UserList /> */}
      {/* <Timer /> */}
      {/* <UserDetail /> */}
      {/* <ToggleDocumentKeyListener /> */}
      {/* <UserList /> */}
      {/* <CountUp /> */}
      {/* <TextInputWithFocusButton /> */}
      {/* <FruitManagerWithoutMemo /> */}
      {/* <CounterControls />
      <CounterControls2 /> */}
      <LoginUserProvier>
        <Header/>
        <Main />
      </LoginUserProvier>
    </>
  )
}

export default App
