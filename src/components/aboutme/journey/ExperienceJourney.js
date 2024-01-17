import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="Aug 2023-present"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          Eucharist-Tech Pte. Ltd Singapore
            </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Software Developer
          </h6>
          <p>• Developed and maintained a no-code platform for workflow management using <strong>Java</strong> and <strong>Java Swing</strong></p>
          <p>• The platform allows users to create and manage workflows without writing any codet</p>
          <p>• It includes features such as a drag-and-drop interface,a variety of pre-built workflow templates, and the ability to integrate with external systems </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Feb - Mar 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          Caterpillar India Engineering Solution
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          Cat Digital Intern
          </h6>
          <p>• Worked on a project "Calculator"</p>
          <p>• Learned <strong>AngularJS</strong> and <strong>C#</strong> during the project</p>
          <p>• Applied the knowledge of AngularJS for frontend and C# for backend in <strong>ASP.NET</strong> framework </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
