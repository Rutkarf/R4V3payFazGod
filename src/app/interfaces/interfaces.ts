export interface Chat {
  id: number;
  nom: string;
  age: number;
  automatiqueAnnonce: boolean;
  description: string;
  race: string;
  annonceUrl: string;
  sterilise: any;
  vaccinations: string;
  adopte: boolean;
  histoire: string;
  type: string;
  sexe: string;
  couleur: string;
  taille: string;
  ententeChien: boolean;
  ententeChat: boolean;
  ententeEnfant: boolean;
  typeFoyerMaison: boolean;
  typeFoyerAppartement: boolean;
  contactEmail: string;
  contactTel: string;
  contactUrl: any;
  createdAt: string;
  updatedAt: string;
  associationId: number;
  photos: Photo[];
  association: Association;
}

export interface Photo {
  id: number;
  createdAt: string;
  url: string;
  chatId: number;
}

export interface Association {
  id: number;
  nom: string;
}
