// Importando o Phaser e criando uma configuração básica
//import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

// Função para carregar os recursos
function preload() {
  this.load.image('button', 'botao.png');
}

// Função chamada quando a cena é criada
function create() {
  const button = this.add.image(400, 300, 'button').setInteractive();

  button.on('pointerup', function() {
    this.scene.start('GameScene');
  }, this);
}

// Criando a cena do jogo
class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    // Carregue os recursos necessários para a cena do jogo, como imagens, sprites, etc.
  }

  create() {
    // Crie o objeto com física e outras configurações da cena do jogo
  }

  update() {
    // Atualize a lógica do jogo aqui
  }
}

// Adicione a cena do jogo ao jogo principal
game.scene.add('GameScene', GameScene);
