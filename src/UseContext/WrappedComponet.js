import React from 'react'
import MyContextProvider from './MyContextProvider'
import ComponetA from './ComponetA'

const WrappedComponet = () => {
  return (
    <div>
        <MyContextProvider>
            <ComponetA/>
        </MyContextProvider>
    </div>
  )
}

export default WrappedComponet