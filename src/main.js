import startGame from "kaplay";
import { loadAssets } from "./loadAssets";
import { level1 } from "./levels/level1";
import { level2 } from "./levels/level2";
import { end } from "./levels/end";
import { begin } from "./levels/begin";

const k = startGame({
  global: false,
  width: 1280,
  height: 720,
  letterbox: true,
  crisp: true,
  background: "#444444",
});

// Load Assets and Levels
loadAssets(k);
begin(k);
level1(k);
level2(k);
end(k);

k.go("begin");
