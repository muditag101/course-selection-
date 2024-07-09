import { useState } from 'react';
import './App.css'
import CourseList from './components/courseList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Course Listing</h1>
      </header>
      <CourseList />
    </div>
  );
}

export default App
