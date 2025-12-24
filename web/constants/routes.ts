/**
 * Centralized route definitions
 * Update this file when adding new routes
 */

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  BLOG: '/blog',
  CONTENT: '/content',
  PROJECTS: '/projects',
  CONTACT: '/contact',
} as const;

export type Route = typeof ROUTES[keyof typeof ROUTES];
