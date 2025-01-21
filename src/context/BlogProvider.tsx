import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface GitHubUserProfileProps {
  login: string;
  avatar_url: string;
}

interface BlogContextProps {
  children?: ReactNode;
}

export const BlogContext = createContext<GitHubUserProfileProps | null>(null);

export function BlogProvider({ children }: BlogContextProps) {
  const [userProfile, setUserProfile] = useState<GitHubUserProfileProps | null>(
    null
  );

  async function getUser() {
    try {
      const response = await api.get("/users/Miguelsabino23");
      const data = await response.data;
      setUserProfile(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <BlogContext.Provider value={userProfile}>{children}</BlogContext.Provider>
  );
}
