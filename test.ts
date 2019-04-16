import { Test, TestFixture, Expect } from "alsatian";

// tslint:disable-next-line:import-own-index
import { getPrompts } from "./index";

@TestFixture()
export class GetPromptsTests {

    @Test("gets correct prompts for base characters only")
    public baseCharactersOnly() {
        const expected = [
            "All players: close your eyes and extend your hand into a fist infront of you",

            // specify "not oberon" here
            "Agents of Evil: open your eyes, and look around, so that you know all Agents of Evil",
            "Agents of Evil: close your eyes",

            // specify "not Mordred" here
            "Agents of Evil: extend your thumb, so that Merlin will know of you",
            "Merlin: open your eyes and see the Agents of Evil",
            "Merlin: close your eyes",
            "Agents of Evil: return your hands to a fist",

            // merlin and morgana raise thumb
            // percival open and close eyes

            "All players should have their eyes closed, with their hands in a fist",
            "All players: open your eyes"
        ];

        const result = getPrompts();

        Expect(result).toEqual(expected);
    }

    @Test("gets correct prompts for Percival")
    public percivalOnly() {
        const expected = [
            "All players: close your eyes and extend your hand into a fist infront of you",

            "Agents of Evil: open your eyes, and look around, so that you know all Agents of Evil",
            "Agents of Evil: close your eyes",

            "Agents of Evil: extend your thumb, so that Merlin will know of you",
            "Merlin: open your eyes and see the Agents of Evil",
            "Merlin: close your eyes",
            "Agents of Evil: return your hands to a fist",

            "Merlin: extend your thumb, so that Percival will know of you",
            "Percival: open your eyes so that you may know Merlin",
            "Percival: close your eyes",
            "Merlin: return your hand to a fist",

            "All players should have their eyes closed, with their hands in a fist",
            "All players: open your eyes"
        ];

        const result = getPrompts({ percival: true });

        Expect(result).toEqual(expected);
    }

    @Test("gets correct prompts for Mordred")
    public mordredOnly() {
        const expected = [
            "All players: close your eyes and extend your hand into a fist infront of you",

            "Agents of Evil: open your eyes, and look around, so that you know all Agents of Evil",
            "Agents of Evil: close your eyes",

            "Agents of Evil - not Mordred himself: extend your thumb, so that Merlin will know of you",
            "Merlin: open your eyes and see the Agents of Evil",
            "Merlin: close your eyes",
            "Agents of Evil: return your hands to a fist",

            "All players should have their eyes closed, with their hands in a fist",
            "All players: open your eyes"
        ];

        const result = getPrompts({ mordred: true });

        Expect(result).toEqual(expected);
    }

    @Test("gets correct prompts for Oberon")
    public oberonOnly() {
        const expected = [
            "All players: close your eyes and extend your hand into a fist infront of you",

            "Agents of Evil - not Oberon: open your eyes, and look around, so that you know all Agents of Evil",
            "Agents of Evil: close your eyes",

            "Agents of Evil - including Oberon: extend your thumb, so that Merlin will know of you",
            "Merlin: open your eyes and see the Agents of Evil",
            "Merlin: close your eyes",
            "Agents of Evil: return your hands to a fist",

            "All players should have their eyes closed, with their hands in a fist",
            "All players: open your eyes"
        ];

        const result = getPrompts({ oberon: true });

        Expect(result).toEqual(expected);
    }

    @Test("gets correct prompts for Morgana")
    public morganaOnly() {
        // Morgana without Percival does nothing
        const expected = [
            "All players: close your eyes and extend your hand into a fist infront of you",

            "Agents of Evil: open your eyes, and look around, so that you know all Agents of Evil",
            "Agents of Evil: close your eyes",

            "Agents of Evil: extend your thumb, so that Merlin will know of you",
            "Merlin: open your eyes and see the Agents of Evil",
            "Merlin: close your eyes",
            "Agents of Evil: return your hands to a fist",

            "All players should have their eyes closed, with their hands in a fist",
            "All players: open your eyes"
        ];

        const result = getPrompts({ morgana: true });

        Expect(result).toEqual(expected);
    }

    @Test("gets correct prompts for Oberon with Mordred")
    public oberonAndMordred() {
        const expected = [
            "All players: close your eyes and extend your hand into a fist infront of you",

            "Agents of Evil - not Oberon: open your eyes, and look around, so that you know all Agents of Evil",
            "Agents of Evil: close your eyes",

            "Agents of Evil - including Oberon, but not Mordred: extend your thumb, so that Merlin will know of you",
            "Merlin: open your eyes and see the Agents of Evil",
            "Merlin: close your eyes",
            "Agents of Evil: return your hands to a fist",

            "All players should have their eyes closed, with their hands in a fist",
            "All players: open your eyes"
        ];

        const result = getPrompts({ oberon: true, mordred: true });

        Expect(result).toEqual(expected);
    }

    @Test("gets correct prompts for Morgana with Percival")
    public morganaAndPercival() {
        const expected = [
            "All players: close your eyes and extend your hand into a fist infront of you",

            "Agents of Evil: open your eyes, and look around, so that you know all Agents of Evil",
            "Agents of Evil: close your eyes",

            "Agents of Evil: extend your thumb, so that Merlin will know of you",
            "Merlin: open your eyes and see the Agents of Evil",
            "Merlin: close your eyes",
            "Agents of Evil: return your hands to a fist",

            "Merlin and Morgana: extend your thumb, so that Percival will know of you",
            "Percival: open your eyes so that you may know Merlin and Morgana",
            "Percival: close your eyes",
            "Merlin and Morgana: return your hand to a fist",

            "All players should have their eyes closed, with their hands in a fist",
            "All players: open your eyes"
        ];

        const result = getPrompts({ morgana: true, percival: true });

        Expect(result).toEqual(expected);
    }

    @Test("gets correct prompts for all characters")
    public allCharacters() {
        const expected = [
            "All players: close your eyes and extend your hand into a fist infront of you",

            "Agents of Evil - not Oberon: open your eyes, and look around, so that you know all Agents of Evil",
            "Agents of Evil: close your eyes",

            "Agents of Evil - including Oberon, but not Mordred: extend your thumb, so that Merlin will know of you",
            "Merlin: open your eyes and see the Agents of Evil",
            "Merlin: close your eyes",
            "Agents of Evil: return your hands to a fist",

            "Merlin and Morgana: extend your thumb, so that Percival will know of you",
            "Percival: open your eyes so that you may know Merlin and Morgana",
            "Percival: close your eyes",
            "Merlin and Morgana: return your hand to a fist",

            "All players should have their eyes closed, with their hands in a fist",
            "All players: open your eyes"
        ];

        const result = getPrompts({ percival: true, mordred: true, oberon: true, morgana: true });

        Expect(result).toEqual(expected);
    }

}
