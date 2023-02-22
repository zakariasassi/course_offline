import React , {useState} from 'react'
import './home.css'
import axios from 'axios'

function Home() {
  const URL = "https://jsonplaceholder.typicode.com/posts"
  //  const [username , setUsername ] = useState("")

  //  const changeName = (event) => {
  //   event.preventDefault();
  //   setUsername("React")
  //  }

  //  const resetName = (event) => {
  //   event.preventDefault();
  //   setUsername("🍕")
  //  }
  const [ data ,  setDate ] = useState([])
  const GetData = async (e) => {
    e.preventDefault();
    await axios.get(URL).then( res => { setDate(res.data)} ).catch(err => { console.log(err)})
     
  }


  return (
    <>
    
    <input type="submit" className='btn btn-danger btn-cls' onClick={GetData} />
        {/* <h1 className='h1-cls'>{username}</h1>
        <input type="submit" className='btn btn-danger btn-cls' onClick={changeName} />
        <input type="submit" value={"reset"} className='btn btn-warning btn-cls' onClick={resetName} /> */}

    {
      data.map((index , key) => {
        return (
          <div >
            <h1>{index.title}</h1>
            <p>{index.body}</p>
          </div>
        )
      } )
    }

    </>
  )
}

export default Home
