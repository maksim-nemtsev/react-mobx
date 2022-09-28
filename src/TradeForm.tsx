import React, { useState } from 'react'
import { observer } from "mobx-react";
import Athlete from './Athlete';

type Props = {
    athlete: Athlete
}

const TradeForm = ({athlete}: Props) => {
    const [teamName, setTeamName] = useState<string>("");
    return (
      <>
        <input
          type="text"
          placeholder="Team name..."
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <span>
          <button type="button" onClick={() => {
            athlete.tradePlayer(teamName);
            setTeamName('');
            }}>
            Trade
          </button>
        </span>
      </>
    );
}

export default observer(TradeForm)