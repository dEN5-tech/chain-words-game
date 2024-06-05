import { Panel, PanelHeader, Group, Header, SimpleCell, Button, Div } from "@vkontakte/vkui";
import { Icon16ArrowLeftOutline } from "@vkontakte/icons";

const SettingsPanel = ({ goBack }) => (
  <Panel id="settings">
    <PanelHeader before={<Div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><Icon16ArrowLeftOutline width={20} height={20} onClick={goBack} /></Div>}>Settings</PanelHeader>
  </Panel>
);

export default SettingsPanel;
