import { useContext } from "react";
import { BlogContext, GitHubUserProfileProps } from "../context/BlogProvider";

export function useBlogContext(): GitHubUserProfileProps | null {
  const context = useContext(BlogContext);

  if (context === undefined) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
}
