interface Characters {
    percival?: boolean;
    mordred?: boolean;
    oberon?: boolean;
    morgana?: boolean;
}

const getAgentsOfEvilPhase = (characters: Characters) => {
    return [
        `Agents of Evil${characters.oberon ? " - not Oberon" : ""}: open your eyes, and look around, so that you know all Agents of Evil`,
        "Agents of Evil: close your eyes"
    ];
};

const getMerlinPhaseIntroduction = (characters: Characters) => {
    if (characters.oberon && characters.mordred) {
        return "Agents of Evil - including Oberon, but not Mordred";
    }

    if (characters.oberon) {
        return "Agents of Evil - including Oberon";
    }

    if (characters.mordred) {
        return "Agents of Evil - not Mordred himself";
    }

    return "Agents of Evil";
};

const getMerlinPhase = (characters: Characters) => {
    const introduction = getMerlinPhaseIntroduction(characters);

    return [
        `${introduction}: extend your thumb, so that Merlin will know of you`,
        "Merlin: open your eyes and see the Agents of Evil",
        "Merlin: close your eyes",
        "Agents of Evil: return your hands to a fist"
    ];
};

const getPercivalPhase = (characters: Characters) => {
    if (!characters.percival) {
        return [];
    }

    const target = characters.morgana ? "Merlin and Morgana" : "Merlin";

    return [
        `${target}: extend your thumb, so that Percival will know of you`,
        `Percival: open your eyes so that you may know ${target}`,
        "Percival: close your eyes",
        `${target}: return your hand to a fist`
    ];
};

const defaultCharacters: Characters = {
    percival: false,
    mordred: false,
    oberon: false,
    morgana: false
};

export const getPrompts = (characters: Characters = {}) => {
    const chars = {
        ...defaultCharacters,
        ...characters
    };

    const prompts = [
        "All players: close your eyes and extend your hand into a fist infront of you",

        ...getAgentsOfEvilPhase(chars),

        ...getMerlinPhase(chars),

        ...getPercivalPhase(chars),

        "All players should have their eyes closed, with their hands in a fist",
        "All players: open your eyes"
    ];

    return prompts;
};
