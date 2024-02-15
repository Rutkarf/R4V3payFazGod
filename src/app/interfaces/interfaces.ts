export interface Chat {
  id: number;
  nom: string;
  age: number;
  automatiqueAnnonce: boolean;
  description: string;
  race?: string;
  annonceUrl?: string;
  sterilise?: any;
  vaccinations?: string;
  adopte: boolean;
  histoire?: string;
  type: string;
  sexe: Sexe;
  couleur: string;
  taille: Taille;
  ententeChien?: boolean;
  ententeChat?: boolean;
  ententeEnfant?: boolean;
  typeFoyerMaison?: boolean;
  typeFoyerAppartement?: boolean;
  contactEmail?: string;
  contactTel?: string;
  contactUrl?: any;
  createdAt: string;
  updatedAt: string;
  associationId: number;
  isVisible: boolean;
  association: Association;
  favoris: Favoris;
  photos: Photo[];
  videos: Video[];
}

export interface Photo {
  id: number;
  createdAt: string;
  url: string;
  chatId: number;
  chat: Chat;
}

export interface Video {
  id: number;
  createdAt: string;
  url: string;
  chatId: number;
  chat: Chat;
}

export interface Utilisateur {
  id: number;
  email: string;
  hash: string;
  adresse?: string;
  ville?: string;
  codePostal?: string;
  telephone?: string;
  nom?: string;
  prenom?: string;
  associationId?: number;
  role: Role;
  password?: string;
  favoris: Favoris[];
  association?: Association;
}

export interface Association {
  id: number;
  nom: string;
  url?: string;
  ville: string;
  urlImage?: string;
  description?: string;
  tel?: string;
  chats: Chat[];
  utilisateurs: Utilisateur[];
}

export interface Favoris {
  id: number;
  createdAt: string;
  chatId: number;
  utilisateurId: number;
  chat: Chat;
  utilisateur: Utilisateur;
}

export enum Role {
  ADMIN,
  USER,
  ASSOCIATION
}

export enum Sexe {
  FEMELLE,
  MALE
}

export enum Taille {
  PETIT,
  MOYEN,
  GRAND
}