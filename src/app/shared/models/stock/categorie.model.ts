export class CategorieModel {
  public id: number;
  public code: string;
  public nom: string;
  public description: string;
  public categorie: CategorieModel;
}
