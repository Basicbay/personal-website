interface EducationItem {
  img: string;
  key: string;
  desc: String;
  date: string;
  link: string;
}

export const EducationItem: EducationItem[] = [
  {
    img: "/images/education/rsu.png",
    key: "Innovation Technology",
    desc: "Rangsit University",
    date: "2012 - 2016",
    link: "https://www2.rsu.ac.th/home",
  },
  {
    img: "/images/education/yorwor.png",
    key: "English French Program",
    desc: "Hatyaiwittayalai School",
    date: "2005 - 2011",
    link: "https://www.hatyaiwit.ac.th/frontpage",
  },
];
