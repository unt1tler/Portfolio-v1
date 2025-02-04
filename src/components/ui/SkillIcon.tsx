import React from 'react';

interface SkillIconProps {
  name: string;
  className?: string;
}

export function SkillIcon({ name, className = "w-8 h-8" }: SkillIconProps) {
  // Convert name to lowercase and handle special cases
  const iconName = name.toLowerCase().replace('.', '').replace(' ', '');
  
  return (
    <img 
      src={`/icons/${iconName}.svg`}
      alt={name}
      className={className}
      onError={(e) => {
        e.currentTarget.src = `https://via.placeholder.com/32?text=${name}`;
      }}
    />
  );
}