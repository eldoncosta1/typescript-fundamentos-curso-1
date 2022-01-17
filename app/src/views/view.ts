import { logarTempoExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { inspect } from "../decorators/inspect.js";

export abstract class View<T> {

  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error('Verifique se o elemento existe na DOM');
    }
  }

  public update(model: T): void {
    this.elemento.innerHTML = this.template(model);
  }

  protected abstract template(model: T): string;

}