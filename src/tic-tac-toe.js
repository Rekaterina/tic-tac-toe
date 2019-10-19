class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = "x";
        this.gameField = [[null, null, null], [null, null, null], [null, null, null]];
    }
  
    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }
  
    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] == null) {
            this.gameField[rowIndex][columnIndex] = this.currentPlayerSymbol;
            if (this.currentPlayerSymbol == "x") {
                this.currentPlayerSymbol = "o";
            } else {
                this.currentPlayerSymbol = "x";
            }
        }
    }
  
    isFinished() {
        if (this.getWinner() != null) {
            return true; 
        } else {
            return this.noMoreTurns();
        }
    }
  
    getWinner() {
        if (
            this.gameField[0][0] + this.gameField[0][1] + this.gameField[0][2] == "xxx" ||
            this.gameField[1][0] + this.gameField[1][1] + this.gameField[1][2] == "xxx" ||
            this.gameField[2][0] + this.gameField[2][1] + this.gameField[2][2] == "xxx" ||
            this.gameField[0][0] + this.gameField[1][0] + this.gameField[2][0] == "xxx" ||
            this.gameField[0][1] + this.gameField[1][1] + this.gameField[2][1] == "xxx" ||
            this.gameField[0][2] + this.gameField[1][2] + this.gameField[2][2] == "xxx" ||
            this.gameField[2][0] + this.gameField[1][1] + this.gameField[0][2] == "xxx" ||
            this.gameField[0][0] + this.gameField[1][1] + this.gameField[2][2] == "xxx"
        ) {
            return "x";
        } else if (
            this.gameField[0][0] + this.gameField[0][1] + this.gameField[0][2] == "ooo" ||
            this.gameField[1][0] + this.gameField[1][1] + this.gameField[1][2] == "ooo" ||
            this.gameField[2][0] + this.gameField[2][1] + this.gameField[2][2] == "ooo" ||
            this.gameField[0][0] + this.gameField[1][0] + this.gameField[2][0] == "ooo" ||
            this.gameField[0][1] + this.gameField[1][1] + this.gameField[2][1] == "ooo" ||
            this.gameField[0][2] + this.gameField[1][2] + this.gameField[2][2] == "ooo" ||
            this.gameField[2][0] + this.gameField[1][1] + this.gameField[0][2] == "ooo" ||
            this.gameField[0][0] + this.gameField[1][1] + this.gameField[2][2] == "ooo"
        ) {
            return "o";
        } else {
            return null; 
        }
    }
  
    noMoreTurns() {
        let count = 0;
        for (let i = 0; i < this.gameField.length; i++) {
            for (let j = 0; j < this.gameField.length; j++) {
                if (this.gameField[i][j] == null) {
                    count++; 
                }
            }    
        }
            if (count == 0) {
                return true; 
            } else {
                return false; 
            }
        
        }
  
    isDraw() {
        if (this.getWinner() != null) {
            return false; 
        } else {
            return this.noMoreTurns(); 
        }
    }
  
    getFieldValue(rowIndex, colIndex) {
        if (this.gameField[rowIndex][colIndex] != null) {
            return this.gameField[rowIndex][colIndex];
        } else {
            return null;  
        }
    }
  }

module.exports = TicTacToe;
