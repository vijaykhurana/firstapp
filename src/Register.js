import React, {useState} from 'react'

const Register = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
  return (
   <form>
       <h3>Enter your Information:</h3>
        <div>
            <input type="text" value={name} 
            placeholder='Name'
            onChange={e => setName(e.target.value)} />
        </div>
        <div>
            <input type='text' value={email} 
            placeholder='email'
            onChange={e=> setEmail(e.target.value)} />
        </div>
        
        <div>
            <button onClick={e=>{
                alert(`
                Your name is ${name},
                Your email is ${email}`)
            }}>Submit</button>
        </div>
       </form>
  )
}
export default Register