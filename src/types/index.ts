import React from 'react';

export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: (props: any) => React.JSX.Element;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Resource {
  title: string;
  description: string;
  type: 'PDF' | 'Video' | 'Guide' | 'Template' | 'Research';
  size?: string;
  downloadUrl: string;
  category: 'education' | 'guides' | 'research' | 'templates';
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
  interest: string;
}