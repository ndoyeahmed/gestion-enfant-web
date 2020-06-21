import {MouvementModel} from './mouvement.model';
import {ProduitModel} from './produit.model';

export class LineMouvementModel {
  public id: number;
  public prix: number;
  public quantite: number;
  public type: string;
  public date: any;
  public mouvement: MouvementModel;
  public produit: ProduitModel;
}
