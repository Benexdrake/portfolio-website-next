import { Journey, Skill } from "@/models/aboutMe";

export const getStars = (stars: number) => {
    const star = '★';
    const noStar = '☆';

    let allStars = '';

    for (let i = 0; i < stars; i++) {
        allStars += star;
    }
    for (let i = stars; i < 5; i++) {
        allStars += noStar;
    }
    return allStars;
}

export const getIcon = (icon: string) => {
    return `/assets/icons/${icon}`
}

export const getSkills = (skill:string, skills:Skill[]) => {
    return skills.filter(x => x.type === skill);
  }

  export const getJourneys = (journeys:Journey[], search:string) =>
  {
    return journeys.filter(x => x.type === search);
  }