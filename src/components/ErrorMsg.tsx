import React from 'react'
import '../css/ErrorMessage.css'

interface ErrorMsgProps {
    msg: string
}

export function ErrorMsg({ msg }: ErrorMsgProps) {
    return (
        <>
            <h1 className='error'>{ msg }</h1>
        </>
    )
}