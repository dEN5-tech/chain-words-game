import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  usePlatform,
  Button,
  Div
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { useState } from 'preact/hooks';
import MainPanel from './panels/MainPanel';
import GameSoloPanel from './panels/GameSoloPanel';
import GameMultiPanel from './panels/GameMultiPanel';
import LeaderboardPanel from './panels/LeaderboardPanel';
import SettingsPanel from './panels/SettingsPanel';
import GamesPanel from './panels/GamesPanel';

const panels = [
  { id: 'main', component: MainPanel },
  { id: 'game_solo', component: GameSoloPanel },
  { id: 'game_multi', component: GameMultiPanel },
  { id: 'leaderboard', component: LeaderboardPanel },
  { id: 'settings', component: SettingsPanel },
  { id: 'games', component: GamesPanel }
];

const App = () => {
  const platform = usePlatform();
  const [activePanel, setActivePanel] = useState('main');

  const goBack = () => {
    setActivePanel('main');
  };

  return (
    <AppRoot>
      <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced>
          <View activePanel={activePanel} nav={activePanel}>
            {panels.map(({ id, component: Component }) => (
              <Component key={id} setActivePanel={setActivePanel} goBack={goBack} id={id} />
            ))}
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  )
}

export default App;
