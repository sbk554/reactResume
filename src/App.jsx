import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Info from './component/Info';
import Introduction from './component/Introduction';
import Technique from './component/Technique';
import Antecedents from './component/Antecedents';
import Project from './component/Project';
import Education from './component/Education';

function App() {
  return (
    <div className='content'>
      <div className='content-info'>
        <Info/>
        <Introduction/>
        <Technique/>
        <Antecedents/>
        <Project/>
        <Education/>
      </div>
      <div className='content-menu'>
        <div className='content-menu-position'>
          <a href='#info'>기본 정보</a>
          <a href="#introduction">자기소개</a>
          <a href="#technique">기술 스택</a>
          <a href="#antecedent">경력</a>
          <a href="#project">프로젝트</a>
          <a href="#education">교육</a>
        </div>
      </div>
    </div>
  );
}

export default App
