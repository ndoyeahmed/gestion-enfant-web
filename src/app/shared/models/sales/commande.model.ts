import {FournisseurModel} from '../stock/fournisseur.model';
import {LineCommandeModel} from './line-commande.model';
import {ClientModel} from './client.model';

export class CommandeModel {
  public id: number;
  public code: string;
  public etat: number;
  public total: number;
  public adresseLivraison: string;
  public client: ClientModel;
  public fournisseur: FournisseurModel;
  public details: LineCommandeModel;
  public description: string;
}
