import { GithubLogo } from "@phosphor-icons/react";
import { useBlogContext } from "../../../hooks/useBlogContext";
import {
  ProfileGitHubContainer,
  ProfileSocialMedia,
  ProfileUser,
} from "./style";

export function ProfileGitHub() {
  const userProfile = useBlogContext();

  if (!userProfile) {
    return <div>Loading...</div>; // Garantir que o perfil esteja carregado
  }

  return (
    <ProfileGitHubContainer>
      <img src={userProfile.avatar_url} alt='Avatar' />
      <ProfileUser>
        <h2>{userProfile.login}</h2>
        <p>{userProfile.bio}</p>
        <ProfileSocialMedia>
          <ul>
            <li>
              <a href={`https://github.com/${userProfile.login}`}>
                <GithubLogo />
                GitHub
              </a>
            </li>
            <li></li>
            <li></li>
          </ul>
        </ProfileSocialMedia>
      </ProfileUser>
    </ProfileGitHubContainer>
  );
}
