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

  @inspect()
  @logarTempoExecucao(true)
  public update(model: T): void {
    let template = this.template(model);
    this.elemento.innerHTML = this.template(model);
  }

  protected abstract template(model: T): string;

}