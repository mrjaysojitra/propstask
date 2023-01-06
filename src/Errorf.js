import React from 'react'

export const Errorf = ({error, resetErrorBoundary}) => {
  return (
    <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
  )
}
