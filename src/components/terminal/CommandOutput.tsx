import React from 'react';
import { siteConfig } from '../../config/site';
import { terminalConfig } from '../../config/terminal';

interface CommandOutputProps {
  command: string;
}

export function CommandOutput({ command }: CommandOutputProps) {
  switch (command.toLowerCase().trim()) {
    case 'help':
      return (
        <div className="mt-2">
          <p>Available commands:</p>
          <ul className="ml-4">
            {terminalConfig.commands.map((cmd, i) => (
              <li key={i}>• {cmd}</li>
            ))}
          </ul>
        </div>
      );
    case 'about':
      return <p className="mt-2">{siteConfig.bio}</p>;
    case 'skills':
      return (
        <div className="mt-2">
          <p>My technical skills:</p>
          <ul className="ml-4">
            {siteConfig.skills.map((skill, i) => (
              <li key={i}>• {skill.name} - {skill.level}%</li>
            ))}
          </ul>
        </div>
      );
    case 'projects':
      return <p className="mt-2">Visit the Projects section to see my recent work!</p>;
    case 'contact':
      return <p className="mt-2">Email me at: {siteConfig.email}</p>;
    case 'clear':
      return null;
    default:
      return <p className="mt-2">Command not found. Type 'help' for available commands.</p>;
  }
}