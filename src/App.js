import Header from './Header.js';
import Content from './Content.js';
import {useState,useEffect} from 'react';

function App() {

  const [isDarkMode,setIsDarkMode] = useState(false);

useEffect(()=>{
  if(isDarkMode){
    document.documentElement.classList.add('dark');
  }else{
    document.documentElement.classList.remove('dark');
  }
}) 

  return (
    <div className='flex flex-col items-center pt-8 pb-8 bg-gradient-to-b from-lightBlue100 to-lightBlue200 dark:from-darkBlue100 dark:to-darkBlue200 h-screen overflow-auto'>
      <Header toggleDarkMode={()=>setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode}/>
      <Content />
    </div>
  );
}

export default App;
