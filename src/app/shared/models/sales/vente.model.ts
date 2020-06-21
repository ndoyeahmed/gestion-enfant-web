import {ClientModel} from './client.model';
import {CommandeModel} from './commande.model';
import {LineVenteModel} from './line-vente.model';

export class VenteModel {
  public id: number;
  public code: string;
  public etat: number;
  public total: number;
  public modePaiement: string;
  public description: string;
  public client: ClientModel;
  public commande: CommandeModel;
  public details: LineVenteModel[];
}
