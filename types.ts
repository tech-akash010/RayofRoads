export type Category = 'Travel' | 'Photography';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  category: Category;
  author: string;
  date: string;
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials?: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    youtube?: string;
  };
}

export interface GalleryItem {
  id: string;
  src: string;
  caption: string;
  location: string;
}