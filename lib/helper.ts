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

  export const getBirthDate = (birthOfDate: number) => {
    let timeDiff = Math.abs(Date.now() - new Date(birthOfDate).getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    return age
  }

  export const getImage = (language:string) =>
  {
   if(language)
   {
     if(language.includes('C#'))
     return '/assets/CSharp.png';
     else if(language.includes('TypeScript') || language.includes('HTML') || language.includes('CSS'))
     return '/assets/Typescript.png';
   }
   return '';
  }