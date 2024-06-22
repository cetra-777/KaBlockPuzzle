export function loadAssets(k) {
  // Load Sprites
  k.loadSprite("box", "sprites/box.png");
  k.loadSprite("goal", "sprites/goal.png");
  k.loadSprite("floor", "sprites/bgTileFloor.png");

  // Load Atlases
  k.loadSpriteAtlas("sprites/tiles.png", {
    wall: {
      x: 0,
      y: 0,
      width: 16,
      height: 16,
    },
    starBack: {
      x: 0,
      y: 16,
      width: 16,
      height: 16,
    },
  });
  k.loadSpriteAtlas("sprites/player.png", {
    hero: {
      x: 0,
      y: 0,
      width: 128,
      height: 16,
      sliceX: 8,
      anims: {
        idleDown: 0,
        idleUp: 3,
        idleRight: 4,
        idleLeft: 6,
        walkDown: { from: 0, to: 1, loop: true },
        walkUp: { from: 2, to: 3, loop: true },
        walkRight: { from: 4, to: 5, loop: true },
        walkLeft: { from: 6, to: 7, loop: true },
      },
    },
  });

  // Load Font
  k.loadFont("press2p", "fonts/PressStart2P-Regular.ttf");

  // Load sfx and music
  k.loadSound("goalSound", "sfx/boxInGoal.wav");
  k.loadMusic("bgMusic", "sfx/bgMusic1.ogg");
}
