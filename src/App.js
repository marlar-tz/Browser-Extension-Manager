import Header from './Header.js';
import Content from './Content.js'


function App() {
  return (
    <div className='flex flex-col items-center pt-8 pb-8 bg-gradient-to-b from-lightBlue100 to-lightBlue200 h-screen overflow-auto'>
      <Header />
      <Content />
    </div>
  );
}

export default App;
