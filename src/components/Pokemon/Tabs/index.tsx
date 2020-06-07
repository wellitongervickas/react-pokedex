import React, {
  useState,
} from 'react';

import 'components/Pokemon/Tabs/styles.scss';
import TabsNav from './Nav';
import TabsContent from './Content';

import parseLabelName from 'helpers/details/name';
import calculateBaseStats from 'helpers/details/base';
import Badget from 'components/Badget';
import LabelBlock from 'components/LabelBlock';

interface PokemonTabsInterface {
  abilities: any[],
  stats: any[],
  forms: any[],
  species: any,
  weight: number,
  height: number,
}

const Tabs = ({
  abilities = [],
  forms = [],
  stats = [],
  species = {},
  weight,
  height,
}: PokemonTabsInterface) => {
  const [tabActive, setTabActive] = useState(1);

  const handleChangeTab = (tab: number) => setTabActive(tab);

  return (
    <div className="tabs">
      <div className="tabs-nav">
        <TabsNav
          active={tabActive === 1}
          onClick={() => handleChangeTab(1)}
          title="Base Stats"
        />
        <TabsNav
          active={tabActive === 2}
          onClick={() => handleChangeTab(2)}
          title="About"
        />
        <TabsNav
          active={tabActive === 3}
          onClick={() => handleChangeTab(3)}
          title="Abilities"
        />
      </div>
      <div className="tabs-content">
        <TabsContent active={tabActive === 1}>
          {stats.map(({ base_stat, stat }) => (
            <div
              key={stat.name}
              className="stat"
            >
              <h4>{parseLabelName(stat.name)}</h4>
              <div className="stat-progress">
                <span>{base_stat}</span>
                <div
                  style={{ width: `${calculateBaseStats(base_stat)}%`}}
                  className="stat-progress-current"
                />
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent active={tabActive === 2}>
          <div className="about">
            <LabelBlock title="species">
              <Badget>{species.name}</Badget>
            </LabelBlock>
            <LabelBlock title="evolutions">
              <div className="forms">
                {forms.map(form => <Badget key={form.name}>{parseLabelName(form.name)}</Badget>)}
              </div>
            </LabelBlock>
            <LabelBlock title="weight">
              <span>{weight} lbs</span>
            </LabelBlock>
            <LabelBlock title="height">
              <span>{height} °</span>
            </LabelBlock>
          </div>
        </TabsContent>
        <TabsContent active={tabActive === 3}>
          <div className="abilities">
            {abilities.map(({ ability }) => <Badget key={ability.name}>{parseLabelName(ability.name)}</Badget>)}
          </div>
        </TabsContent>
      </div>
    </div>
  );
};

export default Tabs;
