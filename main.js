// Importações da API Estável
import { BlockEntity, BlockEntityType, ui } from "minecraft";

// Registro da Entidade de Bloco
const menuFacilBlockEntityType = BlockEntityType.create("menu_facil", {
  size: {
    width: 1,
    height: 1,
    depth: 1,
  },
});

// Registro do Bloco
Block.create("menu_facil", {
  material: "stone",
  entity: menuFacilBlockEntityType,
});

// Função para abrir o menu
function openMenu(player) {
  // Cria a UI
  const menu = ui.createMenu(
    "Menu Fácil", // Título do menu
    {
      width: 500, // Largura da UI
      height: 200, // Altura da UI
    }
  );

  // Define a posição da UI
  menu.setPosition(player.getEyePosition().add(0, 1, 0));

  // Cria os slots da UI
  for (let i = 0; i < 15; i++) {
    menu.addElement(
      ui.Slot(i, {
        x: 10 + (i % 5) * 100, // Posição X do slot
        y: 10 + Math.floor(i / 5) * 100, // Posição Y do slot
      })
    );
  }

  // Exibe a UI para o jogador
  menu.show(player);
}

// Função de uso do item
function onUseItem(item, player, block, side, hitX, hitY, hitZ) {
  // Verifica se o item usado é a bússola
  if (item.id === "minecraft:compass") {
    // Abre o menu
    openMenu(player);
  }
}

// Registro da Função de Uso do Item
events.on(Player.UseItemOn, onUseItem);

// Registro da Entidade de Bloco
BlockEntity.register(menuFacilBlockEntityType, {
  // Comportamento da entidade de bloco
  tick() {
    // ...
  },
});
