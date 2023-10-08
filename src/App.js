import Header from './components/Header';
import ColorPicker from './components/ColorPicker';

function App() {
  const colorsList = ['#6E78FF','#A15D98','#26474E','#11BECC','#F5E960','aliceblue','lightgreen','#698396','#FEDEEF','#F1B2C4','#FF7477','#D3AB9E','#FFEE93','#A5FFD6','#CCB5F0','#dd8f65'];
  return (
    <div className="App" id='backgrnd'>
      <article className='Container'>
        <Header />
        <ColorPicker colors = {colorsList} />
      </article>
    </div>
  );
}

export default App;
