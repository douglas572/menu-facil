import { ui } from "@minecraft/server-ui";
import { world } from "@minecraft/server";

const ITEM_ID = "minecraft:compass";
const UI_TITLE = "Menu com Slots";
const NUM_SLOTS = 15;
const NUM_ROWS = 5;

const BTN_CLOSE_TEXT = "Fechar";

function openMenu(player) {
  const ui = new ui.ActionForm()
    .title(UI_TITLE)
    .contents(createSlots(NUM_SLOTS, NUM_ROWS));

  ui.button(BTN_CLOSE_TEXT).show(player).then((response) => {
    if (response.selection === ui.buttons.length - 1) {
      // Botão de fechar clicado
    } else {
      // Slot clicado
      const slotIndex = response.selection;
      // ... código para lidar com o clique no slot ...
    }
  });
}

function createSlots(numSlots, numRows) {
  const slots = [];
  for (let row = 0; row < numRows; row++) {
    
    