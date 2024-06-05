import { Panel, PanelHeader, Div, Group, Header, SimpleCell, Button } from "@vkontakte/vkui";
import { Icon16ArrowLeftOutline } from "@vkontakte/icons";
const gameModes = [
  { label: 'Играть одному', panel: 'game_solo' },
  { label: 'Играть с другом', panel: 'game_multi' }
];

const GamesPanel = ({ setActivePanel }) => (
  <Panel id="games">
    <PanelHeader before={<Div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Icon16ArrowLeftOutline width={20} height={20} onClick={() => setActivePanel('main')}/></Div>}>Режимы игры</PanelHeader>
    <Group header={<Header mode="secondary">Выберите режим</Header>} style={{ textAlign: 'center' }}>
      {gameModes.map(({ label, panel }) => (
        <SimpleCell key={panel}>
          <Button size="l" stretched onClick={() => {setActivePanel(panel); console.log(panel)}}>{label}</Button>
        </SimpleCell>
      ))}
    </Group>
  </Panel>
  )

export default GamesPanel;
