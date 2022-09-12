// Componentes / propriedades

interface buttonProps {
  title: string;
}

function Button(props: buttonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
  <div>
    <Button title="send 1"/>
    <Button title="send 2"/>
    <Button title="send 3"/>
    <Button title="Hello World"/>
  </div>
  )
}

export default App
