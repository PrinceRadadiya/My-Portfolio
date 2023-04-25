import React from 'react'

const Error = () => {
  return (
    <>
        <div className="ErrorPage">
            <div className='Error'>
                <p>404 error</p>
                <br />
                <p>This page doent't exist.</p>
                <br />
                <p>would you like to learn <span>about HTTP errors?</span> </p>
            </div>
        </div>
    </>
  )
}

export default Error;