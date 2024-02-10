import { useState } from 'react'
import './App.css'

function App() {
  const count = 2
  const [note, setNote] = useState('')
  const [title, setTitle] = useState('')
  const [data, setData] = useState(
    [
      {
        id:1,
        title:'Зайти в заметки',
        note:'Написать или выполнить действие'
      },

    ]  
  )



  const addNote = () =>{
    console.log(note)
    setData((prev) =>{
      return prev.concat({
        id:count+1,
        title:title,
        note:note
      })
    })

    console.log(data)

  }


  const removeNote = () =>{
    console.log('note removed')
  }

  

  return (
    <>
      <div className='center'>
        <div className='notes'>
          <h1> Заметки </h1>
          <div className='input-and-button'>


            <input placeholder='Имя действия' value={title} onChange={(e)=>{
              setTitle(e.target.value)
            }}></input> 
            <div className='center'>           
            <textarea autoFocus placeholder='Текст действия' value={note} onChange={(e)=>{
              setNote(e.target.value)
            }}></textarea></div>

            <button onClick={addNote}> Запомнить </button>
            </div>
          </div>
        </div>


                  {data.map((e)=>{
                    return (
                      <div className='note-item'>
                        <button>❌</button>
                        <h2>{e.title}</h2>

                        <hr></hr>

                        <button > ✅</button>
                        <p>{e.note}</p>
                      </div>
                    )
                  })}

    </>
  )
}

export default App
