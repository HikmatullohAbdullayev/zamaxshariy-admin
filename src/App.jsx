import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout/MainLayout';
import Lessons from './pages/Lessons/Lessons';
import EditLesson from './pages/EditLesson/EditLesson';
import Home from './pages/Home/Home';
import CreateLessons from './pages/CreateLessons/CreateLessons';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/edit-lesson/:id" element={<EditLesson />} />
          <Route path="/create-lesson" element={<CreateLessons />} />

          <Route path="*" element={<h1>sahifa yo`q</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
