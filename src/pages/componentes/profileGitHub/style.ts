import styled from "styled-components";

export const ProfileGitHubContainer = styled.div`
  max-width: 40rem;
  margin: -5rem auto 0 auto;
  display: flex;
  background-color: ${(props) => props.theme["base_background"]};
  padding: 32px 40px;
  position: relative;
  border-radius: 10px;
  gap: 2rem;

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme["base_title"]};
  }
  p {
    color: ${(props) => props.theme["base_text"]};
  }
`;

export const ProfileSocialMedia = styled.div`
  ul {
    display: flex;
    align-items: center;

    list-style: none;

    li {
      a {
        display: flex;
        align-items: center;

        text-decoration: none;
        color: ${(props) => props.theme["base_subtitle"]};
      }
    }
  }
`;
