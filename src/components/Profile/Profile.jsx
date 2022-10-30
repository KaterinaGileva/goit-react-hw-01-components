import {ProfileMarkUp} from './ProfileMarkUp';
import user from './user.json';

export const Profile = () => {
    return ( 
        <ProfileMarkUp 
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
 );
}

