import React from 'react'
import './Home.css'



export default function Home() {

    // const { message, statue } = useSelector(state => ({
    //     ...state.messageReducer,
    // }))


    // const dispatch = useDispatch();

    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch({
    //             type: "REMOVEMESSAGE",
    //         })
    //     }, 8000);
    // }, [])

    return (
        <>
            {/* {statue && (
                <div className = 'box center'>
                    <p className='textMes'>{message}</p>
                </div>
            )} */}
            <h1 className="home-title">Home</h1>
            
            
        </>
    )
}
