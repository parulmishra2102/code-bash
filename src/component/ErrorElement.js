import React from 'react';
import { useRouteError } from 'react-router-dom';
function ErrorElement() {
    const err = useRouteError()
    console.log(err)
  return (
    <div>
      page not found
     {err.status}
    </div>
  )
}

export default ErrorElement
