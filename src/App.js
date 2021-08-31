import FriendsList from './components/friendsList/friendsList';
import Section from './components/Section';
import friends from './json/friends.json';

export default function App() {
  return (
    <div>
      <Section>
        <FriendsList friends={friends} />
      </Section>
    </div>
  );
}
