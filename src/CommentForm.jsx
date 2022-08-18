import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { spacing } from '@mui/system';



const CommentForm = ({handleSubmit, submitLabel}) => {
    const [text, setText] = useState("")
    const estaDeshabilitado = text.length === 0
    const onSubmit = event => {
        event.preventDefault()
        handleSubmit(text)
        setText("")
    }

  return (
    <form onSubmit={onSubmit}>
      <div >
      <TextField
          id="filled-multiline-static"
          label="Escribe tu comentario"
          multiline
          maxRows={4}
          variant="filled"
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          sx={{ mt: 3, width: 400 }}
          />
      </div>
    
      <Button variant="contained" disabled={estaDeshabilitado} type="submit" sx={{ mt: 4, mb: 4, width: 400 }}>{submitLabel}</Button>
    </form>
  )
}


export default CommentForm
