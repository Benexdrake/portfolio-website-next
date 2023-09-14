export class AboutMe {
    title: string = "";
    profileText:string[] = [];
    name: string = "";
    tel:string = "";
    email:string = "";
    street:string = "";
    plz:string = "";
    github:string = "";
    linkedin:string = "";
    birthOfDate: string = "";
    language: string[] = [];
    programLanguage: string[] = [];
    framework: string[] = [];
    tool: string[] = [];
    editorJourney: string[] = [];
    operatingSystem: string[] = [];
    totalProgrammExp: number = 0;
    currentEmployee: string = "";
    location: string = "";
    skills: Skill[] = [];
    journeys: Journey[] = [];
  }
  
  export class Skill {
    title: string = "";
    stars: number = 0;
    type:string = "";
    icon:string = "";
  }

  export class Journey {
    date: string = "";
    title: string = "";
    description:string = "";
    type:string = "";
  }