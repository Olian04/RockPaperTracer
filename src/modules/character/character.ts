export class Character {
    name: string = "not defined";

  activate(params: {id: string}) {
      this.name = params.id;
  }
}