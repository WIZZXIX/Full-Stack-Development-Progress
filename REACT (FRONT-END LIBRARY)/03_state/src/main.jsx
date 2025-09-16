import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Counter from './Counter.jsx'
// import TextInput from './TextInput'
// import Toggle from './Toggle'
import TodoList from './TodoList'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter /> */}
    {/* <TextInput /> */}
    {/* <Toggle /> */}
    <TodoList />
  </StrictMode>,
)
