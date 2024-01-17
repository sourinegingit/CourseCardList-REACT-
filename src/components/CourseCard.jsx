
function CourseCard({ course }) {
  // const{course}=props;
  // console.log(props.course)
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={course.imageUrl} alt={course.title} />
      </div>
      <div className="course-item__detail">
        <CourseCardBody 
        title={course.title} 
        description={course.description} 
        rate={course.rate}/>

        <CourseCardFooter course={course}/>
      </div>
    </div>
  );
}
export default CourseCard;

function CourseCardBody({title,description,rate}) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title} </p>
        <p className="desc">{description}</p>
      </div>
      <span className="rate">{rate}</span>
    </div>
  );
}

function CourseCardFooter({course}) {
  return (
    <div className="course-item__footer">
      <div className="tags">
        {/* <span className="badge badge__secondary">{props.course.tags[0]}</span>
          <span className="badge badge__secondary">{props.course.tags[1]}</span> */}
        {course.tags.map((tags) => {
          return (
            <span key={tags} className="badge badge__secondary">
              react.js
            </span>
          );
        })}
      </div>
      <div className="caption">
        <div className="date">
          {new Date(course.start).toLocaleDateString("en-us", {
            month: "short",
            year: "numeric",
            day: "numeric",
          })}
        </div>
        <span className={`badge ${
          course.status ==="Active" ? "badge--primary" 
          : course.status ==="Upcoming" 
          ? "badge--danger"
          :"badge--secondary"
        }`}>{course.status}</span>
      </div>
    </div>
  );
}
