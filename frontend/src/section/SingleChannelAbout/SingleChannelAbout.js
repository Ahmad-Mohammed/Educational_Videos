import { useContext, useEffect, useState } from "react";
import "./SingleChannelAbout.css";
import { TeacherContext } from "../../Pages/SingleChannel/SingleChannel";

const SingleChannelAbout = () => {

  const [tags, setTags] = useState([])

  const { teacher } = useContext(TeacherContext);
  useEffect(() => {
    setTags(teacher.tags)
  }, []);
  return (
    <div class="container-fluid">
      <div class="video-block section-padding">
        <div class="row">
          <div class="single-video-info-content box mb-3">
            <h6>About :</h6>
            <p>
              {teacher.about}
            </p>
            <h6>Competence :</h6>
            <div>{teacher.competence}</div>
            <br/>
            <br/>
            <h6>Tags :</h6>
            <div class="tags mb-0">
            {tags.map((tag) => (
              <div>
                <a href={tag.link}>{tag.link}</a>
              </div>
            ))}
              
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChannelAbout;
