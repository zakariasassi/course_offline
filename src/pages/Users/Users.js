import React , {useState} from 'react'
import axios from 'axios'


function Users() {
    const [users , setUsers] = useState([])
     async function GetUsers (e) {
        e.preventDefault()
       await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-01-22&sortBy=publishedAt&apiKey=73b9d3125c42422696c581885b310d55").then( res => {setUsers(res.data.articles)}).catch(err => { console.log(err) })
    }

  return (
    <>
      {
        users.map((index , key ) => {
            return (
                <div key={key}>
                    <h6>{index.author}</h6>
                    <h2>{index.title}</h2>
                    <p>{index.description}</p>
                    <a href={index.url}>Link</a><br/>
                    <img style={{ width:"auto" , height:100 }} src={index.urlToImage}  />

                </div>
            )
        })
      }
      <input type="submit" className='btn btn-danger btn-cls' onClick={GetUsers} />

    </>
  )
}

export default Users
