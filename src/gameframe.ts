interface iGameState {
  isGameRunning: boolean;
}
class GameFrame implements iGameState,SubPosition {
  private mainMenu: MainMenu;
  private background: Background;

  //private pauseMenu: PauseMenu;

  /* private gameWon: GameWon;
   private gameLost: GameLost;

   private powerUps: PowerUp[];
   private submarine: Submarine;
  
   private headsUpDisplay: HeadsUpDisplay;
     */

  private collisionListener: CollisionListener;
  private controls: Control;
  public obstacles: Obstacle[];

  public subPositionX: number;
  public subPositionY: number;
  

  //private setDepth: number;
  public isGameRunning: boolean;

  public constructor() {

    this.obstacles = [
      new Iceberg(),
      new Mine()
    ]
    
    

    this.mainMenu = new MainMenu(this);
    this.collisionListener = new CollisionListener(this);
    this.controls = new Control();
    this.isGameRunning = false;
    this.subPositionX = 960 / 2;
    this.subPositionY = 720 / 2;
    this.background = new Background();
  }

  public update() {
    this.mainMenu.update();

    if (this.isGameRunning) {
      document.getElementById("main-menu")!.style.display = "none";
      
      this.background.update();
      
      noCursor();

      for(const obstacle of this.obstacles){
        obstacle.move(); 
        obstacle.randomSpawn(); 
      } 
      this.controls.update();
  
      this.collisionListener.update()
      
    } 
  }

  public draw() {
    if (this.isGameRunning) {
      document.getElementById("main-menu")!.style.display = "none";

      this.background.draw();

      noCursor();

      for(const obstacle of this.obstacles){
        obstacle.draw();  
      } 
      
      this.controls.draw();
      
      this.collisionListener.draw()
    } 
  }
}

  /* private populateObstacles() {}

   private initializePlayer() {}

   private initializePausMenu() {}

   private upwardScroll() {}

   private initilaziePowerUps() {}

   private spawnPowerUp() {}

   private spawnObstacle() {}
 */

//page loads html DOM star button.
