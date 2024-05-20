import React from 'react'
import './Estilos.scss'


export default function Estilos() {
  return (
    <div className='estilos container'>
        <h1 className='h1'>H1: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</h1>
        <h2 className='h2'>H2: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</h2>
        <h2 className='h2 it'>H2 italic: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</h2>
        <h3 className='h3'>H3: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</h3>
        <h3 className='h3 bold'>H3 bold: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</h3>
        <h3 className='h3 it'>H3 italic: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</h3>
        <p className='p'>P: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</p>
        <p className='p bold'>P bold: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</p>
        <p className='p it'>P italic: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</p>
        <p className='p-s'>P-s: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</p>
        <p className='p-s bold'>P-s bold: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</p>
        <p className='p-s it'>P-s italic: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</p>
        <span className='span'>Span: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</span>
        <span className='span bold'>Span bold: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</span>
        <span className='span it'>Span Italic: Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!</span>
        <div className='margins'>
            <h2 className='h2'>Margins:</h2><h2></h2>
            <p className='p'>Big 40px</p>
            <div style={{ height: '20px', width: '40px', backgroundColor: '#9CCDA1' }}></div>
            <p className='p'>Small 20px</p>
            <div style={{ height: '20px', width: '20px', backgroundColor: '#9CCDA1' }}></div>
            <p className='p'>Tiny 10px</p>
            <div style={{ height: '20px', width: '10px', backgroundColor: '#9CCDA1' }}></div>
        </div>
        <div className='colors'>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#9CCDA1', paddingLeft: '10px' }}>#9CCDA1</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#68967A', paddingLeft: '10px' }}>#68967A</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#E32B38', paddingLeft: '10px' }}>#E32B38</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#BA2022', paddingLeft: '10px' }}>#BA2022</div>
            <div className='h2 f-w' style={{ height: '30px', width: '100%', backgroundColor: '#191D1C', paddingLeft: '10px' }}>#191D1C</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#4F6F63', paddingLeft: '10px' }}>#4F6F63</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#A7B7B1', paddingLeft: '10px' }}>#A7B7B1</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#DDE0DF', paddingLeft: '10px' }}>#DDE0DF</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#F8F8F8', paddingLeft: '10px' }}>#F8F8F8</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#FCF5EA', paddingLeft: '10px' }}>#FCF5EA</div>
            <div className='h2' style={{ height: '30px', width: '100%', backgroundColor: '#FFEBD0', paddingLeft: '10px' }}>#FFEBD0</div>
        </div>
        <div className='buttons'>
          <h2 className='h2'>Inputs:</h2><h2></h2>
          <p className='p'>Button</p><button className='btt h2'>Click Me</button>
          <p className='p'>Button icon</p><button className='btt h2'><span className="material-symbols-rounded icon_btt">history</span>Click Me</button>
          <p className='p'>Button Txt</p><button className='btt_txt h2'>Click Me</button>
          <p className='p'>Button Txt icon</p><button className='btt_txt_smol h3'>Click Me<span className="material-symbols-rounded icon_btt">history</span></button>
          <p className='p'>Button Txt Alt</p><button className='btt_txt_alt h3'>Click Me</button>
          <p className='p'>Button Txt Alt icon</p><button className='btt_txt_alt h3'>Click Me<span className="material-symbols-rounded icon_btt">history</span></button>
          <p className='p'>Input txt</p><input type='text' className='input' id='searchbar' placeholder='Search by Name' />
          <p className='p'>Input txt</p><input type='text' className='input' id='searchbar' placeholder='Search by Name'  required minlength="8" />
          <p className='p'>Input txt disabled</p><input type='text' className='input' id='searchbar' placeholder='Search by Name'  required minlength="8" disabled/>
          <p className='p'>Tag</p><button className='tag span'>Tag</button>
          <p className='p'>Tag Disabled</p><button className='tag span' disabled >Tag</button>
          <p className='p'>Tag alt</p><button className='tag_alt span'>Tag</button>
          <p className='p'>Tag alt Disabled</p><button className='tag_alt span' disabled >Tag</button>
        </div>
    </div>
  )
}
