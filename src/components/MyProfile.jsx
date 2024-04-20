import React from 'react'

// eslint-disable-next-line react/prop-types
function MyProfile({ data }) {
  return (
    <div>
      <h1>My Profile</h1>
      <p>My name is {data.firstName} {data.lastName}</p>
      <p>I'm {data.age} yearsold</p>
      <br />
    </div>
  )
}

export default MyProfile