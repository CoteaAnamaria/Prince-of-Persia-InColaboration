// DON'T MODIFY THE CODE BELOW THIS LINE

import { getStairsMovementDirection } from './levels.Ioanpaul.js';
import { getZigZagMovementDirection } from './levels.Ioanpaul.js';
import { manuallyControl } from './levels.Ioanpaul.js';
import { givePotion2Answer } from './levels.Ioanpaul.js';
import { givePotion3Answer } from './levels.Ioanpaul.js';
import { givePotion4Answer } from './levels.Ioanpaul.js';
import { givePotion5Answer } from './levels.Ioanpaul.js';
import { givePotion6Answer } from './levels.Ioanpaul.js';
import { givePotion7Answer } from './levels.Ioanpaul.js';
import { givePotion8Answer } from './levels.Anamaria.js';
import { givePotion9Answer } from './levels.Anamaria.js';
import { givePotion10Answer } from './levels.Ioanpaul.js';
import { givePotion11Answer } from './levels.Ioanpaul.js';
import { givePotion12Answer } from './levels.Ioanpaul.js';
import { level7Move } from './levels.Anamaria.js';
import { level8Move } from './levels.Lucian.js';

let toExport;

try {
    toExport = [
        { name: "getStairsMovementDirection", content: getStairsMovementDirection, type: "function" },
        { name: "getZigZagMovementDirection", content: getZigZagMovementDirection, type: "function" },
        { name: "manuallyControl", content: manuallyControl, type: "function" },
        { name: "givePotion2Answer", content: givePotion2Answer, type: "function" },
        { name: "givePotion3Answer", content: givePotion3Answer, type: "function" },
        { name: "givePotion4Answer", content: givePotion4Answer, type: "function" },
        { name: "givePotion5Answer", content: givePotion5Answer, type: "function" },
        { name: "givePotion6Answer", content: givePotion6Answer, type: "function" },
        { name: "givePotion7Answer", content: givePotion7Answer, type: "function" },
        { name: "givePotion8Answer", content: givePotion8Answer, type: "function" },
        { name: "givePotion9Answer", content: givePotion9Answer, type: "function" },
        { name: "givePotion10Answer", content: givePotion10Answer, type: "function" },
        { name: "givePotion11Answer", content: givePotion11Answer, type: "function" },
        { name: "givePotion12Answer", content: givePotion12Answer, type: "function" },
        { name: "level7Move", content: level7Move, type: "function" },
        { name: "level8Move", content: level8Move, type: "function" },
    ]

} catch (error) {
    toExport = { error: error.message }
}

export { toExport };
