import { Panel, PanelHeader, Group, Header, SimpleCell, Button } from "@vkontakte/vkui";
import { Icon16ArrowLeftOutline } from "@vkontakte/icons";

const gameMenu = [
  { label: 'Режимы игры', panel: 'games' },
  { label: 'Настройки', panel: 'settings' },
  { label: 'Лидеры', panel: 'leaderboard' }
];

const MainPanel = ({ setActivePanel }) => (
  <Panel id="main">
    <PanelHeader>Цепочка слов</PanelHeader>
    <Group header={<Header mode="secondary">Меню игры</Header>} style={{ textAlign: 'center' }}>
      {gameMenu.map(({ label, panel }) => (
        <SimpleCell key={panel}>
          <Button size="l" stretched onClick={() => {setActivePanel(panel); console.log(panel)}}>{label}</Button>
        </SimpleCell>
      ))}
    </Group>
  </Panel>
);

export default MainPanel;
