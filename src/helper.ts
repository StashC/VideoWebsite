export const primaryColor = "#47d653";
export const secondaryColor = "#398242";
export const backgroundColor = "#2b2d31";
export const darkBackgroundColor = "#232428";
export const textColor = "#ffffff";

// Taken from stack overflow:
// https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click\
export const scrollTo = (classId: string) => {
  const target = document.getElementById(classId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

export interface IMedia {
  type: "VIDEO" | "IMAGE";
  url: string;
  caption?: string;
}

export enum Icon {
  "WEBSITE" = 1,
  "github" = 2,
  "discord" = 3,
  "chrome" = 4,
  "reddit" = 5,
  "instagram" = 6,
  "youtube" = 7,
  "email" = 8,
  "linkedin" = 9,
}

export interface ILink {
  displayText: string;
  url: string;
  icon?: Icon;
}

export interface IProjectData {
  id: number;
  mediaList: IMedia[];
  longDescription: string;
  links: ILink[];
  title: string;
  technologies: string[];
  thumbnail: string;
  shortDescription: string;
}
