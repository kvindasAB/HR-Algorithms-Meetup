// Generated by CoffeeScript 1.6.3
(function() {
  window.solve = function(input) {
    var existingMatch, existingMatchRank, human, humanPrefs, humans, matchByHuman, matchByPuppy, matchedAll, myRank, puppies, puppy, puppyPrefs, roundNum, solution, _i, _len;
    humanPrefs = input.humans;
    puppyPrefs = input.puppies;
    humans = _.keys(humanPrefs);
    puppies = _.keys(puppyPrefs);
    matchByHuman = {};
    matchByPuppy = {};
    matchedAll = false;
    roundNum = 0;
    while (!matchedAll) {
      matchedAll = true;
      for (_i = 0, _len = humans.length; _i < _len; _i++) {
        human = humans[_i];
        if (!matchByHuman[human]) {
          matchedAll = false;
          puppy = humanPrefs[human].pop();
          if (!matchByPuppy[puppy]) {
            matchByPuppy[puppy] = human;
            matchByHuman[human] = puppy;
          } else {
            existingMatch = matchByPuppy[puppy];
            myRank = puppyPrefs[puppy].indexOf(human);
            existingMatchRank = puppyPrefs[puppy].indexOf(existingMatch);
            if (myRank >= existingMatchRank) {
              matchByHuman[existingMatch] = null;
              matchByHuman[human] = puppy;
              matchByPuppy[puppy] = human;
            }
          }
        }
      }
    }
    solution = [];
    for (puppy in matchByPuppy) {
      human = matchByPuppy[puppy];
      solution.push({
        human: human,
        puppy: puppy
      });
    }
    return solution;
  };

}).call(this);