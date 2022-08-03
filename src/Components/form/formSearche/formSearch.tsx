import React, {useState} from 'react'
import {Input} from "../../input/input";
export function FormSearch() {
    const [term, setTerm] = useState('')

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();

        // Do something
        alert(term);
    }
    return (
        <>
            <form action="" method="post" onSubmit={submitForm} >
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="Enter a term"
                    className="input"

                />
                <button type="submit" className="btn">Submit</button>

            </form>
        </>
    )
}
