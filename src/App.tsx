import "./App.css";

function App() {
  let name: string | number = "Sertaç";
  let age: number = 30;

  type Obj = {
    name : string,
    age : number,
    isMarried : boolean
  }

  let obj : Obj = {
    name : "Sertaç",
    age : 30,
    isMarried : false
  }
  
  return <div className="App">{name}</div>;
}

export default App;
