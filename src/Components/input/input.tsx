import React from 'react'


export function Input(name: string, onChange: ()=> void, required: boolean = true,classInput:string,placeholder:string ) {
    return (
        <>
            <input name={name} onChange={onChange} required={required} className={classInput} placeholder={placeholder} />

        </>
    )
}