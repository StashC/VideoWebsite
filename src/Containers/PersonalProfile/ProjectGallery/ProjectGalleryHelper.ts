import { Icon, IProjectData } from "../../../helper.ts";

export const ProjectData: IProjectData[] = [
  {
    id: 1,
    mediaList: [
      {
        type: "IMAGE",
        url: "https://s3-alpha.figma.com/hub/file/1868768632/319bab1e-752e-460b-83d6-a5b8fa5067c8-cover.png",
        caption: "Some random image",
      },
    ],
    links: [
      {
        displayText: "Chrome Web Store",
        url: "https://chromewebstore.google.com/detail/ubc-workday-side-by-side/gonljejijjjmjccdbjokcmmdfmlincmh?hl=en",
        icon: Icon.WEBSITE,
      },
      {
        displayText: "GitHub",
        url: "https://github.com/mlool/workday-calendar-extension",
        icon: Icon.github,
      },
    ],
    title: "UBC Workday Chrome Extension",
    technologies: [
      "React",
      "Project Management",
      "TypeScript",
      "HTML/CSS",
      "Bussiness Development",
      "APIs",
    ],
    shortDescription: "A cool project",
    longDescription: "A much longer description about this cool project",
    thumbnail:
      "https://s3-alpha.figma.com/hub/file/1868768632/319bab1e-752e-460b-83d6-a5b8fa5067c8-cover.png",
  },
  {
    id: 2,
    mediaList: [
      {
        type: "IMAGE",
        url: "https://s3-alpha.figma.com/hub/file/989421327/c6dcc549-72ea-4eff-ab87-82a4dcdd7032-cover.png",
        caption: "Some random image",
      },
    ],
    links: [
      {
        displayText: "Linkedin Post",
        url: "https://chromewebstore.google.com/detail/ubc-workday-side-by-side/gonljejijjjmjccdbjokcmmdfmlincmh?hl=en",
        icon: Icon.linkedin,
      },
      {
        displayText: "GitHub",
        url: "https://github.com/mlool/workday-calendar-extension",
        icon: Icon.github,
      },
    ],
    title: "UBC Workday Chrome Extension",
    technologies: ["HTML/CSS", "Bussiness Development", "APIs"],
    shortDescription: "A cooler project #2",
    longDescription:
      "A much longer description about this cool project 12312312312",
    thumbnail:
      "https://s3-alpha.figma.com/hub/file/989421327/c6dcc549-72ea-4eff-ab87-82a4dcdd7032-cover.png",
  },
];
