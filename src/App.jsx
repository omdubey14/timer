
import { useState } from "react"
const App = () => {
const [time,settime] = useState(new Date().toLocaleTimeString())
setInterval(
  ()=>{
    settime(new Date().toLocaleTimeString())
  },1000)
  return (
    <div  className="bg-red-400 h-4"><h1>{time}</h1></div>
  )
}

export default App