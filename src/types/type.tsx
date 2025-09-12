
export interface Vlog {
  id: number;
  imagePath: any; // El tipo `Json` de Prisma es flexible. `any` o un tipo más específico si sabes la estructura
  title: string;
  slogan: string;
  description: string;
  year: number;
  linkToGithub?: string; // El signo `?` indica que la propiedad es opcional (null en Prisma)
  linkToX?: string;
  linkToTiktok?: string;
  linkToFacebook?: string;
  linkToLinkeind?: string;
  startDate: Date;
  endDate?: Date;
  skils: VlogSkill[];
  project: boolean;
  primary: boolean;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  skills: ExperienceSkill[];
}

export interface About {
  id: number;
  fullName: string;
  bio: string;
  email: string;
  country?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  presentationSkils?: any; // Similar a `imagePath`, `any` es un tipo genérico para `Json`
  facebook: string,
  instagram: string,
  tiktok: string,
  x: string
}

export interface VlogSkill {
  vlogId: number;
  skillId: number;
  vlog: Vlog; // Se incluye el objeto completo si necesitas la información de la relación
  skill: Skill;
}

export interface ExperienceSkill {
  experienceId: number;
  skillId: number;
  experience: Experience;
  skill: Skill;
}

export interface Skill {
  id: number;
  name: string;
  description: string;
  type: string;
  logo: string;
  projects?: VlogSkill[];
  experiences?: ExperienceSkill[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  skills: ExperienceSkill[];
}

// src/interfaces/index.ts (o un archivo similar para tus interfaces)

// Interfaces de la base de datos (las que proporcionaste)
export interface RegisterVlog {
  id: number;
  imagePath: any;
  title: string;
  slogan: string;
  description: string;
  year: number;
  linkToGithub?: string;
  linkToX?: string;
  linkToTiktok?: string;
  linkToFacebook?: string;
  linkToLinkeind?: string;
  startDate: Date;
  endDate?: Date;
  skils: VlogSkill[];
  project: boolean;
  primary: boolean;
}

export interface RegisterExperience {
  id: number;
  company: string;
  role: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  skills: ExperienceSkill[];
}

export interface RegisterAbout {
  id: number;
  fullName: string;
  bio: string;
  email: string;
  country?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  presentationSkils?: any;
}

export interface RegisterVlogSkill {
  vlogId: number;
  skillId: number;
  vlog: Vlog;
  skill: Skill;
}

export interface RegisterExperienceSkill {
  experienceId: number;
  skillId: number;
  experience: Experience;
  skill: Skill;
}

export interface RegisterSkill {
  id: number;
  name: string;
  description: string;
  type: string;
  logo: string;
  projects?: VlogSkill[];
  experiences?: ExperienceSkill[];
}

// Interfaz para la respuesta completa de la API
export interface RegisterApiData {
  about: About;
  skils: Skill[];
  vlog: Vlog[];
  project: Vlog[];
}

// Interfaz para el Store de Zustand
export interface RegisterVlogStore {
  // Estado de los datos y su carga
  vlogData: RegisterApiData | null;
  isLoading: boolean;
  error: string | null;

  // Acciones (métodos para interactuar con el estado)
  fetchVlogData: () => Promise<void>;
  clearVlogData: () => void;
}