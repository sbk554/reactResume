import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Info from './component/Info';
import Introduction from './component/Introduction';
import Technique from './component/Technique';

function App() {
  return (
    <div className='content'>
      <div className='content-info'>
        <Info/>
        <Introduction/>
        <Technique/>
      </div>
      <div className='content-menu'>
        <div className='content-menu-position'>
          <a href='#info'>기본 정보</a>
          <a href="#introduction">자기소개</a>
          <a href="#technique">기술 스택</a>
          <a>경력</a>
          <a>프로젝트</a>
          <a>교육</a>
        </div>
      </div>
    </div>
  );
}

export default App
