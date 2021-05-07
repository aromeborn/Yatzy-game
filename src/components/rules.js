import Popover from '@material-ui/core/Popover';
function Rules () {
return (
<div> 
    <br/>
    <h2>Purpose of the game</h2>
    <br/>
    <p>
    In Yatzy the objective is to obtain the highest score by throwing 5 dice.
    There are 13 rounds in the game, each round every player rolls all 5 dice and the roll is scored in one of 13 categories. 
    You must score once in each category and each category is scored with different sets of die faces. 
    The game ends when all 13 categories have been scored.
    </p>
    <br/>
    <h2>Start</h2>
    <br/>
    <p>
    One player rolls all the dice. After rolling, they can score the current roll or re-roll any or all of the dice. The player may only roll the dice a total of 3 times, after which the player must choose a category to score in. The turn then proceeds to the next player.
    </p>
    <br/>
    <h2>Scoring </h2>
    <br/>
    <p>
    To score combinations of 5 dice select one of the 13 categories
    and write it on the scorecard. Once a box has been scored, it cannot be
    scored again.
    <br/>
    <strong>Upper Section Scoring:</strong> 
    <br/>
    If a player chooses to score in the upper section the score
    is the total of the specified die faces. Example: You roll three 2s, end your turn and score 6 points in the ‘2’ category.
    <strong>Bonus:</strong> If the total of the Upper Scores is 63 or over, add a bonus of 50.
    <br/>
    <strong>Lower Section Scoring: </strong>
    <br/>
    <strong>Pair: </strong> 2 dice with the same faces. The score is the total of these two die faces.
    <br/>
    <strong>Two pairs:</strong> One pair, and another pair of dice with different faces from each other. The score is the total of these four die faces. Example: 6+6+5+5=22
    <br/>
    <strong>3 and 4 of a Kind: </strong> For 3 of a kind, 3 die faces must be the same; for 4 of a kind, 4 must be the same. The score is the total of all the 3 or 4 dice.
    <br/>
    <strong>Small and Large Straight:</strong> A straight is a sequence of consecutive die faces; a small straight is made up of die faces 1-2-3-4-5 and scores 15 points; a large straight is made up of die faces 2-3-4-5-6 and scores 20 points.
    <br/>
    <strong>Full House: </strong> A Full House as in poker is a combination of 3 of a kind and 2 of a kind. The score is the total of the die faces. Example: 6+6+6+5+5=28
    <br/>
    <strong>Yatzy:</strong> Yatzy is 5 of a kind and scores 50 points, but you can choose to score the roll in other categories instead. Example: You roll 6-6-6-6-6. You can choose to score this as a Yatzy (50), 4 of a kind (24) or in the Upper Section ‘6’ (30).
    <br/>
    <strong>Chance: </strong>Roll anything and put it into the Chance category, the score is the total of the die faces.
    <br/>
    <strong>Zero score:</strong> If you cannot score a category after your 3 rolls, choose any category and mark 0 points to it.
    </p>
</div>)
}
export default Rules;