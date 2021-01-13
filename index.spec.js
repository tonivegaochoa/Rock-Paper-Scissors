const playRound = require('./index');

describe('Play Round', function() {
    it('is a tie game', function() {
        expect(playRound('rock', 'rock')).toEqual('It\'s a tie!');
        expect(playRound('paper', 'paper')).toEqual('It\'s a tie!');
        expect(playRound('scissors', 'scissors')).toEqual('It\'s a tie!');
    });
    it('computer beats player', function() {
        expect(playRound('scissors', 'rock')).toEqual('You Lose! Rock beats Scissors');
        expect(playRound('rock', 'paper')).toEqual('You Lose! Paper beats Rock');
        expect(playRound('paper', 'scissors')).toEqual('You Lose! Scissors beats Paper');
    });
    it('player beats computer', function() {
        expect(playRound('rock', 'scissors')).toEqual('You Win! Rock beats Scissors');
        expect(playRound('paper', 'rock')).toEqual('You Win! Paper beats Rock');
        expect(playRound('scissors', 'paper')).toEqual('You Win! Scissors beats Paper');
    });
});