import React from "react";

import "./courses.css";
//make different layouts
export default function page() {
  const info = [
    {
      id: 1,
      courseImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrcViV7LlN_rUPMZgSmFJTrmqARsz5MxRCg&s",
      degree: "good",
      courseTitle: "zedan   ",
    },
    {
      id: 2,
      courseImg:
        "https://static.euronews.com/articles/stories/08/17/47/68/1200x675_cmsv2_460d2610-7173-5200-a098-64bf74e13649-8174768.jpg",
      degree: "excelent",
      courseTitle: "pepi  ",
    },
    {
      id: 3,
      courseImg:
        "https://i.insider.com/5a6a12f81784254f0f8b4638?width=700",
      degree: "V . good",
      courseTitle: "morino  ",
    },
    // {
    //   id: 4,
    //   courseImg:
    //     "https://imgs.search.brave.com/wqU5i0YewFffqERhyCf-sISmBelj5WLABXdD87mD5t8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDkvbmV4dC1q/cy1hdXRvbWF0aWMt/aW1hZ2Utb3B0aW1p/emF0aW9uLW5leHQt/aW1hZ2UucG5n",
    //   degree: "good",
    //   courseTitle: "Next Js",
    // },
    // {
    //   id: 5,
    //   courseImg:
    //     "https://imgs.search.brave.com/rMAX5ZkF3lbKi5wzfews88IbebeJoZUOD2UxqH6Z-eE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kMnNv/ZnZhd2UwOHlxZy5j/bG91ZGZyb250Lm5l/dC9ib29rLWFuZ3Vs/YXIvc19oZXJvPzE3/MDY2OTg3NjA.jpeg",
    //   degree: "Bad",
    //   courseTitle: " Angular ",
    // },
  ];

  return (
    <>
      <div className="course-container">
        {info.map((user, i) => (
          <div key={i} className="my-4">
            <div className="book">
              <p> Name : {user.courseTitle}</p>
              <p>degree : {user.degree}</p>

              <div className="cover">
                <img src={user.courseImg} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
