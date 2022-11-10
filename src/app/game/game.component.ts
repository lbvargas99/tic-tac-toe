import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  currentPlayer: string = 'X';
  winner: string = '';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]

  processPlay(line: number, col: number) {
    if (this.board[line][col] == '' && this.winner == '') {
      this.board[line][col] = this.currentPlayer;

      this.checkWinner(this.currentPlayer);
      this.currentPlayer = this.currentPlayer == 'X' ? 'O' : 'X';
    }
    

  }

  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        this.winner = player
        return true;
      }
    }
    for (let j = 0; j < this.board.length; j++) {
      if (this.board[0][j] == player && this.board[1][j] == player && this.board[2][j] == player) {
        this.winner = player
        return true;
      }
    }

    if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player) {
      this.winner = player
      return true;
    }
    if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player) {
      this.winner = player
      return true;
    }
    return false;
  }

  restart() {
    this.currentPlayer = 'X';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }
}
