import {ProduitModel} from '../stock/produit.model';
import {VenteModel} from './vente.model';

export class LineVenteModel {
  public id: number;
  public prix: number;
  public quantite: number;
  public produit: ProduitModel;
  public vente: VenteModel;
}
