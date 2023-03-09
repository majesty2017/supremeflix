import { useCallback, useState } from 'react'
import {Button, Input} from '../components'
import {Hero, Logo} from '../public/images'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])
    

  return (
    <div className='relative w-full h-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
        <div className='bg-black h-full w-full lg:bg-opacity-50'>
            <nav className='px-12 py-5'>
                <img src='/images/logo.png' alt="Logo" className='h-12' />
            </nav>
            <div className='flex justify-center'>
                <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                    <h2 className='text-4xl mb-8 font-semibold'>
                        {variant === 'login' ? 'Sign in' : 'Register'}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {variant === 'register' && (
                            <Input label='Username' id='name' value={name} onChange={(e:any) => setName(e.target.value)} />
                        )}

                        <Input label='Email' id='email' type='email' value={email} onChange={(e:any) => setEmail(e.target.value)} />

                        <Input label='Password' id='password' type='password' value={password} onChange={(e:any) => setPassword(e.target.value)} />
                    </div>
                    {variant === 'login' ? (
                        <Button text='Login' />
                    ) : (
                        <Button text='Sign Up' />
                    )}
                    <p className='text-neutral-500 mt-12'>
                        {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'} 
                        <span className='ml-1 hover:underline cursor-pointer text-blue-500' onClick={toggleVariant}>
                            {variant === 'login' ? 'Create an account' : 'Sign in'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth