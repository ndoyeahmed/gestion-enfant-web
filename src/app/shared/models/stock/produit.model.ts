import {CategorieModel} from './categorie.model';

export class ProduitModel {
  public id: number;
  public code: string;
  public libelle: string;
  public description: string;
  public prixUnitaire: number;
  public prixVente: number;
  public quantite: number;
  public seuil: number;
  public image: string;
  public categorie: CategorieModel;
}
