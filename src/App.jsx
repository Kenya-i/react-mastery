import './App.css'
import { Box } from './components/chap02/Box'
import { Message } from './components/chap02/Message'
import { Notification } from './components/chap02/Notification'
import { RemainingTickets } from './components/chap02/RemainingTickets'
import { StatusMessage } from './components/chap02/StatusMessage'
import { UserCard } from './components/chap02/UserCard'
import { UserList } from './components/chap02/UserList'
// import { Greeting } from './components/chap01/Greeting';
// import { ImageSection } from './components/chap01/ImageSection';
// import { UserGreeting } from './components/chap01/UserGreeting';

function App() {
  return (
    <>
      {/* <Greeting />
      <ImageSection />
      <UserGreeting /> */}
      <UserCard name="taro" role="エンジニア"/>
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
      <RemainingTickets userName="jiro"/>
      <UserList />
    </>
  )
}

export default App
