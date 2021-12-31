import {useGetUser} from '../../../../../hooks/user';
import {TwitterIcon} from '../../../../icons/TwitterIcon';
import {GitHubIcon} from '../../../../icons/GitHubIcon';
import {getGitHubUrl, getTwitterUrl} from '../../../../../utils/social';
import Link from 'next/link';
import {Button} from '../../../../commons/Button';
import {useRecoilState} from 'recoil';
import {currentUserState} from '../../../../../recoil/atoms';

import styles from './Profile.module.css';

type Props = {screenName: string};

export const Profile: React.VFC<Props> = ({screenName}) => {
  const [currentUser] = useRecoilState(currentUserState);
  const {user, isError} = useGetUser(screenName);

  if (!user) return null;

  const twitterUrl = user.twitter_username
    ? getTwitterUrl(user.twitter_username)
    : '';
  const gitHubUrl = user.twitter_username
    ? getGitHubUrl(user.github_username)
    : '';

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.cover_image}
        style={{backgroundImage: `url(${user.cover_image_url})`}}
      />
      <div className={styles.container}>
        <div className={styles.icon_and_sns}>
          <div
            className={styles.icon_image}
            style={{backgroundImage: `url(${user.icon_image_url})`}}
          />
          <div className={styles.sns_buttons}>
            {twitterUrl && (
              <a
                href={twitterUrl}
                target="_blank"
                className={`${styles.sns_icon} ${styles.twitter_icon}`}
              >
                <TwitterIcon width="60%" height="60%" fill="white" />
              </a>
            )}
            {gitHubUrl && (
              <a
                href={gitHubUrl}
                target="_blank"
                className={`${styles.sns_icon} ${styles.github_icon}`}
              >
                <GitHubIcon width="60%" height="60%" fill="white" />
              </a>
            )}
          </div>
        </div>

        <div className={styles.body}>
          <div>
            <h1 className={styles.user_name}>{user.name}</h1>
            <span className={styles.screen_name}>@{user.screen_name}</span>
            <span className={styles.belongs_and_job}>
              {user.belongs} / {user.job}
            </span>
          </div>
          <div className={styles.follow_area}>
            {currentUser.userData && (
              <Link href="/edit" passHref>
                <Button>編集</Button>
              </Link>
            )}
          </div>
        </div>
        <div className={styles.bio}>{user.bio}</div>
      </div>
    </div>
  );
};
