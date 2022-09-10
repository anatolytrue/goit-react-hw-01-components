import user from '../user.json'
import data from '../data.json'
import Section from './Section';
import StatisticsList from './statistics/StatisticsList';
import  Profile  from './profile/Profile'

export default function App () {
  return (
    <div
      style={{
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Section title="First task">
        <Profile
          userName={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          statsFollowers={user.stats.followers}
          statsViews={user.stats.views}
          statsLikes={user.stats.likes}
        />
      </Section>
      <Section title="Second task">
        <StatisticsList title="Upload stats" items={data}/>
      </Section>

      
    </div>
  );
};