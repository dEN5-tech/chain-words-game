import { Panel, PanelHeader, Group, Header, SimpleCell, Avatar, Div } from "@vkontakte/vkui";
import { Icon16ArrowLeftOutline } from "@vkontakte/icons";

const mockData = {
  leaderboard: [
    { id: 1, username: 'Player1', score: 1000 },
    { id: 2, username: 'Player2', score: 900 },
    { id: 3, username: 'Player3', score: 800 },
  ]
};

const LeaderboardPanel = ({ goBack }) => {
  const isDev = process.env.NODE_ENV === 'development';
  const data = isDev ? mockData : null;
  const loading = !isDev;
  const error = null;

  if (loading) return <Div>Loading...</Div>;
  if (error) return <Div>Error: {error.message}</Div>;

  return (
    <Panel id="leaderboard">
      <PanelHeader before={<Div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><Icon16ArrowLeftOutline width={20} height={20} onClick={goBack} /></Div>}>Leaderboard</PanelHeader>
      <Group header={<Header mode="secondary">Top Players</Header>}>
        {data.leaderboard.map(({ id, username, score }) => (
          <SimpleCell key={id} before={<Avatar size={40} />}>
            {username} - {score}
          </SimpleCell>
        ))}
      </Group>
    </Panel>
  );
};

export default LeaderboardPanel;
