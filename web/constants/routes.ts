/**
 * Centralized route definitions
 * Update this file when adding new routes
 */

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  CONTACT: '/contact',
} as const;

export type Route = typeof ROUTES[keyof typeof ROUTES];
