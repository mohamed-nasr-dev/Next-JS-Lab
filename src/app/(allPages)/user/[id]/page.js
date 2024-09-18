import userModel from "@/app/_lib/model/user";
import { GET } from "@/app/api/users/[id]/route";
import React from "react";

//generate dynamic metadata


export async function generateMetadata({params}) {
  const user = await userModel.findById(params.id);
  return {
    title:user.userName
  }


  
}



const UserDetails = async ({ params }) => {

  const user = await userModel.findById(params.id);

  console.log(user);
  
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-primary">User Details</h1>
            <p className="lead text-secondary">
              Here you can find the details of our users.
            </p>
            <hr className="my-4" />

            {/* ############ */}
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <img
                    src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="w-50"
                  />
                </div>
                <div className="col-sm">
                  <h2 className="card-title my-5 text-bg-dark text-center">
                    {" "}
                    Name :{user.userName}
                  </h2>
                  <h5 className="my-3">
                    <strong>Email:</strong> {user.email}
                  </h5>

                  {/* <h5 className="my-3">
                    <strong>Phone:</strong> {user.phone}
                  </h5> */}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
