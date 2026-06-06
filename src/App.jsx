import './App.css'

const Greeting = () => {
  return (
      <div>
        <h1>Hello act</h1>
      </div>
  );
}

const ImageSection = () => {
  return (
      <div>
        <img src="https://placehold.jp/150x150.png" />
        <br />
      </div>
  );
}

function App() {
  return (
    <>
      <Greeting />
      <ImageSection />
    </>
  )
}

export default App
