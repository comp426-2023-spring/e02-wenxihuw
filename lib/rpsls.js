// Generate random shot
function randomItem(obj) {
    const items = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[~~randomIndex];
}

const rpsRules = {
    "rock": ["paper"],
    "paper": ["scissors"],
    "scissors": ["rock"]
};

export function rps(playerShot) {
    if (playerShot === undefined) {
        return {"player": randomItem(rpsRules)};
    }

    let lowerCaseShot = playerShot.toLowerCase();
    if (!(lowerCaseShot in rpsRules)) {
        console.log(
            `Rules for Rock Paper Scissors:

                - Scissors CUTS Paper
                - Paper COVERS Rock
                - Rock CRUSHES Scissors
            `
        );
        process.exit(1);
    }

    let opponentShot = randomItem(rpsRules);
    let result = rpsRules[lowerCaseShot].includes(opponentShot.toLowerCase()) ? "lose" : "win";
    if (lowerCaseShot == opponentShot) result = "tie";

    return {"player": playerShot, "opponent": opponentShot, "result": result};
}

const rpslsRules = {
    "rock": ["paper", "spock"],
    "paper": ["scissors", "lizard"],
    "scissors": ["rock", "spock"],
    "spock": ["lizard", "paper"],
    "lizard": ["rock", "scissors"]
};

export function rpsls(playerShot) {
    if (playerShot === undefined) {
        return {"player": randomItem(rpslsRules)};
    }

    if (!(playerShot.toLowerCase() in rpslsRules)) {
        console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors: - Scissors CUTS Paper
            - Paper COVERS Rock
            - Rock SMOOSHES Lizard
            - Lizard POISONS Spock
            - Spock SMASHES Scissors
            - Scissors DECAPITATES Lizard
            - Lizard EATS Paper
            - Paper DISPROVES Spock
            - Spock VAPORIZES Rock
            - Rock CRUSHES Scissors`)
        process.exit(1)
    }

    let opponentShot = randomItem(rpslsRules);
    let result = rpslsRules[playerShot.toLowerCase()].includes(opponentShot.toLowerCase()) ? "lose" : "win";
    if (playerShot.toLowerCase() == opponentShot) result = "tie";

    return {"player": playerShot, "opponent": opponentShot, "result": result};
}
