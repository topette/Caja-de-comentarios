import { useEffect, useState } from 'react'
import './Comments.css'
import { getComments as getCommentsApi, createComment as createCommentApi} from './api'
import Comment from './Comment'
import CommentForm from './CommentForm'
import "@fontsource/open-sans"
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/800.css'


const Comments = ({currentUserId}) =>{
  const [backendComments, setBackendComments] = useState([])
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  )
  const getReplies = commendId => {
    return backendComments.filter(backendComment => backendComment.parentId === commendId)
  }
  const addComment = (text, parentId) => {
    /*console.log('addComment', text, parentId)*/
    createCommentApi(text, parentId).then(comment => {
      setBackendComments([comment, ...backendComments])
    })
  }
  /*console.log('backendComments', backendComments)*/

  useEffect( ()=> {
    getCommentsApi().then((data) => {
      setBackendComments(data)
    })
  }, []) 
  return (
    

      <div className="Comments">
        
        <h2> ¡Haz tu comentario!</h2>
          <div className="card">
          <CommentForm submitLabel='Enviar comentario' handleSubmit={addComment} />
          <div>
          {rootComments.map(rootComment => (
          <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)} />
        ))}
          </div>
          </div>
        <p className="read-the-docs">@topette</p>
      </div>
    )
}

export default Comments

/*
function Comments () {
  const [comentarios, setComentarios] = useState([])

  return (
    
  )
}

*/
/* <textarea name="textarea" rows="5" cols="50" className="comment-form-textarea" placeholder="Escribe tu comentario..."></textarea>
      <button className="button-primary" >
          Enviar comentario
        </button>*/