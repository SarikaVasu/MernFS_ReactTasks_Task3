const ColorPicker = (props) => {
  const colors = props.colors;
  let colorSeleceted;

  const selectColor = (color) => {
    colorSeleceted = color;
  }

  const choose = () => {
    if(!document.getElementById('hide1').style.display) {
      document.getElementById('hide1').style.display = "flex";
    } else {
      document.getElementById('displayColor').style.backgroundColor = colorSeleceted;
      document.getElementById('hide1').style.display = "none";
      document.getElementById('hide2').style.display = "none";
      document.getElementById('hide3').style.display = "block";
    }
  }

  const displayColorPalette = () => {
    console.log(document.getElementById('hide1').style.backgroundColor);
    document.getElementById('hide1').style.display = "flex";
    document.getElementById('hide2').style.display = "block";
    document.getElementById('hide3').style.display = "none";
  }

  return (
    <main>
      <article className='holder'>

        <article className='boxSet' id='displayColor'>
          <article className="hide" id='colorBox'>
            <ul id='hide1'>
              {colors.map((color) => (
                <li className="colorBox" 
                style={{backgroundColor: color}}
                onClick={() => selectColor(color)}
                data-alpha="1" 
                key={colors.indexOf(color)}>
                </li>
              ))}
            </ul>
            <button 
              className='button' 
              id='hide2'
              onClick={choose}>
                Pick a color
              </button>
          </article>
        </article>
              
        <article className='buttonBox'>
          <button className='button1' id='hide3' 
          onClick={displayColorPalette}>
            Pick another color
          </button>
        </article> 

      </article>
    </main>
  )
}

export default ColorPicker;

// const ColorPicker = (props) => {
//   const colors = props.colors;

//   const showPalatte = () => {
//     document.getElementById('hide1').style.display = "flex";
//   }
  
//   const changeColor = (color) => {
//     document.getElementById('displayColor').style.backgroundColor = color;
//     document.getElementById('hide1').style.display = "none";
//     document.getElementById('hide2').style.display = "none";
//     document.getElementById('hide3').style.display = "block";
//   }

//   const displayColorPalette = () => {
//     document.getElementById('hide1').style.display = "flex";
//     document.getElementById('hide2').style.display = "block";
//     document.getElementById('hide3').style.display = "none";
//   }

//   return (
//     <main>
//       <article className='holder'>

//         <article className='boxSet' id='displayColor'>
//           <article className="hide" id='colorBox'>
//             <ul id='hide1'>
//               {colors.map((color) => (
//                 <li className="colorBox" 
//                 style={{backgroundColor: color}}
//                 onClick={() => changeColor(color)}
//                 data-alpha="1" 
//                 key={colors.indexOf(color)}>
//                 </li>
//               ))}
//             </ul>
//             <button 
//               className='button' 
//               id='hide2'
//               onClick={showPalatte}>
//                 Pick a color
//               </button>
//           </article>
//         </article>
              
//         <article className='buttonBox'>
//           <button className='button1' id='hide3' 
//           onClick={displayColorPalette}>
//             Pick another color
//           </button>
//         </article> 

//       </article>
//     </main>
//   )
// }

// export default ColorPicker;