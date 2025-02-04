import React from 'react';
import { siteConfig } from '../config/site';
import { Star, GitFork, GitCommit } from 'lucide-react';

export function GitHubStats() {
  if (!siteConfig.github.stats.enabled) return null;

  return (
    <div className="flex items-center justify-center gap-16 text-lg">
      {siteConfig.github.stats.showStars && (
        <div className="flex items-center gap-3">
          <Star className="w-6 h-6 text-yellow-500" />
          <span className="font-semibold">{siteConfig.github.stats.stars}</span>
        </div>
      )}
      {siteConfig.github.stats.showRepos && (
        <div className="flex items-center gap-3">
          <GitFork className="w-6 h-6 text-primary" />
          <span className="font-semibold">{siteConfig.github.stats.repos}</span>
        </div>
      )}
      {siteConfig.github.stats.showCommits && (
        <div className="flex items-center gap-3">
          <GitCommit className="w-6 h-6 text-green-500" />
          <span className="font-semibold">{siteConfig.github.stats.commits}</span>
        </div>
      )}
    </div>
  );
}