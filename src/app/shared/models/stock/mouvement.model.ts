import {LineMouvementModel} from './line-mouvement.model';
import {CommandeModel} from '../sales/commande.model';

export class MouvementModel {
  public id: number;
  public code: string;
  public etat: number;
  public total: number;
  public type: string;
  public description: string;
  public commande: CommandeModel;
  public details: LineMouvementModel;
  public mouvement: MouvementModel;
}
