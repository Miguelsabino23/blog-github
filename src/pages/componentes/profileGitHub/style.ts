import styled from "styled-components";

export const ProfileGitHubContainer = styled.div`
  max-width: 50rem;
  margin: -5rem auto 0 auto;
  display: flex;
  background-color: ${(props) => props.theme["base_profile"]};
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

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      text-decoration: none;
      font-weight: bold;
      color: ${(props) => props.theme["blue"]};
    }

    h2 {
      color: ${(props) => props.theme["base_title"]};
    }
  }
  p {
    color: ${(props) => props.theme["base_text"]};
  }
`;

export const ProfileSocialMedia = styled.div`
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 0.4rem;

      a {
        display: flex;
        align-items: center;
        gap: 0.4rem;

        text-decoration: none;
        color: ${(props) => props.theme["base_subtitle"]};
      }

      color: ${(props) => props.theme["base_subtitle"]};
    }
  }
`;

export const IconProfile = styled.div`
  display: flex;
  align-items: center;

  padding: 0.1rem;
  border-radius: 50%;

  background-color: ${(props) => props.theme["base_label"]};
`;
