export class Home {
  header = 'This is Header';
  content = 'This is content';
  
  updateContent(ev: Event){
    var txt =  ev.srcElement.innerHTML.split(' ');
    this.header = txt[0];
    this.content = txt[1];
  }
}