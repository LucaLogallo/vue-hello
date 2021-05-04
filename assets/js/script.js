const app = new Vue ({
  el : '#app',
  data:{
    messaggioPlaceholderHideText :"inserisci il messaggio nascosto",
    messaggioH1: "mostra password :  ",
    messaggio2H1: '',
    classeActive: "testoNascosto",
    classiH1:"testoH1",
    miaClasse:"testoH1",
    isActive : false,
    text_p: "",
    textU: "",
    text : "",
    alfabeto : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"]
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
    },
    keyEnter (event){
      if(event.code !== 'Enter' && this.alfabeto.includes(event.key)){
          
          this.textU += event.key;
          console.log(this.text_p);
          console.log(this.textU);
          console.log(event);

      }else{

        this.text = this.textU;
        this.textU = "";
        this.text_p = "";

      }
      console.log(event)
    }
  }
});
