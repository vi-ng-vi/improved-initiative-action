import * as React from "react";

import { HpVerbosityOption } from "../../../common/PlayerViewSettings";
import {
  AutoGroupInitiativeOption,
  AutoRerollInitiativeOption,
  PostCombatStatsOption
} from "../../../common/Settings";
import { Info } from "../../Components/Info";
import { Dropdown } from "./Dropdown";
import { Toggle } from "./Toggle";

export function OptionsSettings(props: {
  goToEpicInitiativeSettings: () => void;
}) {
  return (
    <div className="tab-content options">
      <h3>Rules</h3>
      <Toggle fieldName="Rules.RollMonsterHp">
        Roll HP when adding a Creature from Library Pane
        <Info>
          When you add a Creature from your Library, its Hit Point Maximum will
          be generated by rolling the dice expression in the Hit Points detail
          section.
        </Info>
      </Toggle>
      <Toggle fieldName="Rules.EnableBossAndMinionHP">
        Show Boss and Minion buttons on Library Creatures
        <Info>
          Hover or preview a Creature in the Library Pane to reveal these
          buttons. The pawn icon will add a creature as a 1HP "minion" and the
          king icon will add it with the maximum possible HP roll.
        </Info>
      </Toggle>
      <Toggle fieldName="Rules.AllowNegativeHP">
        Allow combatants to have negative hit points
      </Toggle>
      <Toggle fieldName="Rules.AutoCheckConcentration">
        Automatically prompt for concentration checks
        <Info>
          When a combatant has a tag with the text "Concentrating", a prompt
          with a suggested concentration check will appear if they receive
          damage. You can ignore the prompt or automatically clear the tag.
        </Info>
      </Toggle>
      <Dropdown
        fieldName="Rules.AutoGroupInitiative"
        options={AutoGroupInitiativeOption}
      >
        Automatically add creatures to initiative group
        <Info>
          Creatures in an initiative group will keep the same initiative count.
          Group members keep their initiative in sync when you roll or edit
          initiative, and you can unlink individual members. "By Name" will
          group creatures with the same name. "Side Initiative" creates one
          group for Player Characters and one for everyone else.
        </Info>
      </Dropdown>
      <Dropdown
        fieldName="Rules.AutoRerollInitiative"
        options={AutoRerollInitiativeOption}
      >
        Automatically reroll initiative each round's end
      </Dropdown>

      <h3>Encounter View</h3>
      <Toggle fieldName="TrackerView.DisplayPortraits">
        Display Character Portraits
      </Toggle>
      <Toggle fieldName="TrackerView.DisplayRoundCounter">
        Display Round Counter
      </Toggle>
      <Toggle fieldName="TrackerView.DisplayTurnTimer">
        Display Turn Timer
      </Toggle>
      <Toggle fieldName="TrackerView.DisplayDifficulty">
        Display Encounter Difficulty
        <Info>
          Encounter Difficulty is calculated based on the guidelines in the
          Dungeon Master's Guide. It accounts for how many Player Characters are
          in the combat, or assumes 4 characters if none are present. All
          Creatures and Non Player Characters are counted as enemies.
        </Info>
      </Toggle>
      <Toggle fieldName="TrackerView.DisplayCombatantColor">
        Display Combatant Colors
        <Info>Enables a widget to assign a color to each combatant.</Info>
      </Toggle>
      <Toggle fieldName="TrackerView.DisplayReactionTracker">
        Display Reaction Tracker
      </Toggle>
      <Toggle fieldName="TrackerView.DisplayHPBar">
        Display HP Bar of Active or Selected Character
        <Info>
          Show a small HP bar indicator for any selected combatant(s), as well
          as for the currently-active combatant.
        </Info>
      </Toggle>
      <Dropdown
        fieldName="TrackerView.PostCombatStats"
        options={PostCombatStatsOption}
      >
        Display Post-Combat Stats Summary
        <Info>
          These statistics include elapsed time, and average time-per-turn, for
          each Player Character in the encounter and the DM.
        </Info>
      </Dropdown>

      <h3>Player View</h3>
      <Toggle fieldName="PlayerView.DisplayRoundCounter">
        Display Round Counter
      </Toggle>
      <Toggle fieldName="PlayerView.DisplayTurnTimer">
        Display Turn Timer
      </Toggle>
      <Toggle fieldName="PlayerView.DisplayCombatantColor">
        Display Combatant Colors
      </Toggle>
      <Dropdown
        fieldName="PlayerView.MonsterHPVerbosity"
        options={HpVerbosityOption}
      >
        Creature and NPC HP Verbosity
        <Info>
          Control how much information about combatants is revealed in the
          Player View window. Colored Label will change from green to red, so
          keen-eyed players might deduce exact HP percentage.
        </Info>
      </Dropdown>
      <Dropdown
        fieldName="PlayerView.PlayerHPVerbosity"
        options={HpVerbosityOption}
      >
        Player Character HP Verbosity
      </Dropdown>
      <Toggle fieldName="PlayerView.HideMonstersOutsideEncounter">
        Don't show Creatures and NPCs in Player View until encounter is started
      </Toggle>
      <Toggle fieldName="PlayerView.AllowPlayerSuggestions">
        Allow players to suggest damage/healing
        <Info>
          Players can suggest damage (or healing, with a negative number) by
          clicking or tapping the current HP of any combatant in the Player
          View. You can accept the full or half amount of damage.
        </Info>
      </Toggle>
      <Toggle fieldName="PlayerView.ActiveCombatantOnTop">
        Active combatant at top of initiative list
        <Info>
          The initiative list will display active and upcoming combatants first,
          and include an "End of Round" marker.
        </Info>
      </Toggle>
      <p>
        {"Additional player view options available with "}
        <a href="#" onClick={props.goToEpicInitiativeSettings}>
          Epic Initiative
        </a>
      </p>
      <h3>Preloaded Content</h3>
      <Toggle fieldName="PreloadedContent.BasicRules">
        Basic Rules (OGL) Creatures
      </Toggle>
      <Toggle fieldName="PreloadedContent.Open5eContent">
        Additional Open5e OGL Creatures
        <Info>
          Includes Tome of Beasts, Creature Codex, and Monstrous Menagerie
        </Info>
      </Toggle>
    </div>
  );
}
