import {
  ArrowSquareOut,
  GithubLogo,
  LinkedinLogo,
  Users,
} from "@phosphor-icons/react";
import { useBlogContext } from "../../../hooks/useBlogContext";
import {
  IconProfile,
  ProfileGitHubContainer,
  ProfileSocialMedia,
  ProfileUser,
} from "./style";

export function ProfileGitHub() {
  const userProfile = useBlogContext();

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileGitHubContainer>
      <img src={userProfile.avatar_url} alt='Avatar' />
      <ProfileUser>
        <div>
          <h2>{userProfile.login}</h2>
          <a href=''>
            GITHUB
            <ArrowSquareOut weight='fill' />
          </a>
        </div>
        <p>{userProfile.bio}</p>
        <ProfileSocialMedia>
          <ul>
            <li>
              <a href={`https://github.com/${userProfile.login}`}>
                <IconProfile>
                  <GithubLogo weight='fill' color='#0B1B2B' />
                </IconProfile>
                GitHub
              </a>
            </li>
            <li>
              <a href='in/miguel-sabino-38a738231'>
                <LinkedinLogo />
                LinkedIn
              </a>
            </li>
            <li>
              <Users color='#C4D4E3' />
              <span>{userProfile.following}</span>
            </li>
          </ul>
        </ProfileSocialMedia>
      </ProfileUser>
    </ProfileGitHubContainer>
  );
}
