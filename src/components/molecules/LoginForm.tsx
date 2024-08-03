import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, setError } from '../../stores/staffSlice'
import Button from '../atoms/Button'
import { RootState } from '../../stores'
import Input from '../atoms/Input'
import Label from '../atoms/Label'
import Alert from '../atoms/Alert'

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const error = useSelector((state: RootState) => state.staff.error)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email || !password) {
        dispatch(setError('Please fill in all fields'))
        return
    }
    
    dispatch(login({ email, password }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <Alert type='error' message={error}/>}

      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name={'email'} placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <Button type="submit" label="Login" className="w-full" />
    </form>
  )
}

export default LoginForm
