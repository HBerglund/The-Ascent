

class MainMenu {
  private startButton: any;
  private aboutButton: any;
  public game: iGameState;

  constructor(game: iGameState) {
    //this.startButton = createButton('start');
    //this.startButton.mouseClicked(console.log('test'))
    this.game = game;
    this.startButton = document.getElementById("start-game")!;
  }

  public update() {
    //console.log(this.startButton)
    
    this.startButton.onclick = () => {
      //this.startButton.hide();
      this.game.isGameRunning = true;
    } 
  
    /* this.startButton.mousePressed(() => {
      
    }); */
    
  }
   public draw() { 
    //console.log('test')
    //this.startButton.mouseClicked(console.log('test'))
    }

  public true(){
    //can't change isGameRunning to true with mouseClicked???
    this.game.isGameRunning = true;
    console.log('test')
  } 
/* public constructor() {}
    
    private gameFrame() {}
    private about() {} */
}
