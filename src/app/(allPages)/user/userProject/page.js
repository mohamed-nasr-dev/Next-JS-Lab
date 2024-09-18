import React from 'react'
import "../courses/courses.css"
export default function page() {
  const info = [
    {
      id: 1,
      courseImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPug-eoFlILfRdGvKpguzooSHimZXBqML7Q&s",
      status: "good",
      ProjectName: "embabi  ",
    },
    {
      id: 2,
      courseImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnI3xK74ci0LLL9UlC_nfjx24Pp-SQUALCQ&s",
      status: "very good",
      ProjectName: "debrione ",
    },
    {
      id: 3,
      courseImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_d4W0leCNH2Sh4yT8aTbu3FoQUf2nMig3xw&s"
       ,
      status: "excelent",
      ProjectName: "oblack",  
    },
    // {
    //   id: 4,
    //   courseImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJov309LKzR09EJuf4hAKxhFlu_NK0vgshYg&s",
    //   status: "good",
    //   ProjectName: " java Script Project",
    // },
    // {
    //   id: 5,
    //   courseImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_d4W0leCNH2Sh4yT8aTbu3FoQUf2nMig3xw&s",
    //   status: "Bad",
    //   ProjectName: " Angula  Projectr ",
    // },
  ];

  return (
    <>
   <div className="course-container">
   {info.map((project, i) => (
        <div key={i} className="my-4">
          <div className="book">
          
            <p> Name : {project.ProjectName}</p>
            <p>status : {project.status}</p>
           
            <div className="cover">
              <img src={project.courseImg} />
            </div>
          </div>
        </div>
      ))}
   </div>
    </>
  );
}
