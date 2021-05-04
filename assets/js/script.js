const app = new Vue ({
  el : '#app',
  data:{
    messaggioPlaceholderHideText :"inserisci il messaggio nascosto",
    messaggioH1: "messaggio da stampare nell'h1",
    messaggio2H1: '',
    classeActive: "testoNascosto",
    classiH1:"testoH1",
    miaClasse:"testoH1",
    isActive : false
  },
  methods:{
    cambiaClasse(classe){
      console.log('ciao');
      this.miaClasse = "testoH1";
      this.miaClasse += classe;
    },
    attiva(classe){
      if(this.isActive === false){
        this.isActive = !this.isActive;
        this.classeActive += classe;
        console.log("attiva");
      }else{
        this.classeActive = "testoNascosto";
        this.isActive = false;
        console.log("disattiva");
      };
      console.log('ciao');
    }
  }
});
