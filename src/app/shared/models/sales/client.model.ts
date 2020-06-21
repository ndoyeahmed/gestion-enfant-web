import {CommandeModel} from './commande.model';

export class ClientModel {
  public id: number;
  public code: string;
  public firstName: string;
  public lastName: string;
  public telephone: string;
  public adresse: string;
  public etat: boolean;
  public archive: boolean;
  public nomComplet: string;
  public commandes: CommandeModel[];
}
