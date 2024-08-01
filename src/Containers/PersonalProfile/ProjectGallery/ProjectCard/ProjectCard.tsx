import React from "react";
import { IProjectData } from "../../../../helper.ts";
import Chip from "../../../../Components/Chip/Chip.tsx";
import "./ProjectCard.css";

interface IProjectCardProps {
  data: IProjectData;
  selected: boolean;
  setSelectedProject: (IProjectData) => void;
}

const ProjectCard = ({
  data,
  selected,
  setSelectedProject,
}: IProjectCardProps) => {
  let cardTechs: string[] = [];
  if (data.technologies.length > 3) {
    cardTechs = data.technologies.slice(0, 3);
  } else {
    cardTechs = data.technologies;
  }

  return (
    <div
      className={selected ? "ProjectCardSelected" : "ProjectCard"}
      onClick={() => {
        setSelectedProject(data);
      }}
    >
      <div className="ProjectThumbnailContainer">
        <img src={data.thumbnail}></img>
      </div>
      <div className="ProjectInfoContainer">
        <h2>{data.title}</h2>
        <p>{data.shortDescription}</p>

        <div className="TechnologiesContainer">
          {cardTechs.map((tech) => {
            return <Chip text={tech} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
