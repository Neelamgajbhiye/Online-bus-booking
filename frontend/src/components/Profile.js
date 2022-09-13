import React from 'react'

function Profile() {
  const user=localStorage.getItem("loggedInUser");
  console.log(user);
  return (
    <div className="container fuselage">
      <div className="row">
        <div className="col-6 justify-content-center">
         <div>
         <label>Name:</label>
         <h6>{user}</h6>

         </div>
         <div>
         <label>Email ID:</label>
         <h6>user name</h6>
         
         </div>
         <div>
         <label>Gender:</label>
         <h6>user name</h6>
         
         </div>
         <div>
         <label>Booking History:</label>
         <h6>user name</h6>
         
         </div>
         

         
        </div>

      </div>
      

    </div>
  )
}

export default Profile