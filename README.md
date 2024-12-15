Here’s the complete **README** file for **Ascend: A Fantasy Card Adventure**:

---

# Ascend: A Fantasy Card Adventure

## Overview

**Ascend** is a multiplayer strategy card game built using **HTML**, **JavaScript**, and **Tailwind CSS**. Players race to move their tokens up a grid, flipping cards, using special abilities, and navigating penalties to win. The game features a **Fantasy Adventure** theme, with each player represented by a unique character tied to their chosen card suit.

---

## Game Logic

### Objective

The goal is to move your token past **Row 4 (Win Row)** before your opponents, using card flips, special cards, and strategic decisions.

### Mechanics

#### Player Tokens and Grid:

- The grid has **rows based on player count**:
  - **2 players:** 4 rows (excluding start and end rows).
  - **3 players:** 5 rows (excluding start and end rows).
  - **4 players:** 6 rows (excluding start and end rows).
- Individual columns are assigned to each player.
- Each row has specific functions:
  - **Row 0:** Starting row for all players.
  - **Gameplay Rows:** This is the amount of rows based on player count .
  - **Intermediate Rows:** Contain hidden cards.
  - **Last Row (Win Row):** The row players must land on this row to win.
- Players move their tokens up the grid by matching flipped cards to their chosen suit.

#### Deck Composition:

- Contains cards matching all player suits (e.g., ♠️, ♥️, ♣️, ♦️).
- Includes two special cards:
  - **Swap Position Card:** Allows a player to swap places with another.
  - **Choice Card:** Offers the player a choice to move up by one row or push an opponent down by one row.

#### Card Matching Rules:

- If the flipped card matches a player’s suit, that player moves up one row.
- If the flipped card matches another player’s suit, the corresponding player moves up one row.

#### Hidden Cards:

- Hidden cards remain face-down until all players reach the same row as the card.
- If a hidden card matches a player’s suit when revealed, the player moves **down one row** as a penalty.

#### Winning Condition:

- The first player to move past the **last row (Win Row)** wins the game.

---

## Special Cards

#### Swap Position Card:

- Allows the player to swap their token’s position with another player.

#### Choice Card:

- Allows the player to either:
  - Move their token up by one row.
  - OR force another player’s token down by one row.

---

## Technologies Used

### 1. JavaScript

- **Game Logic:**
  - Manages card flips, player movements, and penalties.
  - Implements special card functionality.
- **Dynamic UI Updates:**
  - Moves tokens, flips cards, and triggers animations in real time.

### 2. HTML

- **Structure:**
  - Defines the grid layout for the game board and player columns.
  - Organizes the deck, discard pile, and player dashboards.

### 3. Tailwind CSS

- **Styling:**
  - Provides a clean and responsive design for the grid and elements.
  - Adds animations for card flips, token movement, and win effects.

---

## How to Play

### Start the Game:

- Select the number of players (2–4) and assign suits to each player.

### Gameplay:

- Players take turns flipping cards from the deck.
- Use special cards strategically to disrupt opponents or boost your progress.
- Hidden cards introduce penalties if their suit matches a player.

### Win:

- The first player to move past the **last row (Win Row)** wins.

---

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/ascend-game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ascend-game
   ```
3. Open `index.html` in your browser to start the game.

---

## Features

- Interactive grid-based gameplay.
- Dynamic animations for token movement and card flips.
- Support for 2–4 players.

---

## Future Enhancements

- Online multiplayer support.
- Special card (trap door)

---

## Contributions

Contributions are welcome! Feel free to open issues or submit pull requests to enhance the game.

---

## License

This project is licensed under the MIT License.

---
