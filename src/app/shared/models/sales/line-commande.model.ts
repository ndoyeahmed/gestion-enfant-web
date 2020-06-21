import {ProduitModel} from '../stock/produit.model';
import {CommandeModel} from './commande.model';

export class LineCommandeModel {
  public id: number;
  public prix: number;
  public quantite: number;
  public produit: ProduitModel;
  public commande: CommandeModel;
}
