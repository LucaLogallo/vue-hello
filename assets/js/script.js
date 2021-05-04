const app = new Vue ({
  el : '#app',
  data:{
    messaggioH1: "messaggio da stampare nell'h1",
    classiH1:"testoH1",
    miaClasse:"testoH1"
  },
  method:{
    cambiaClasse(classe){
      this.miaClasse = classe;
    }
  }
});
