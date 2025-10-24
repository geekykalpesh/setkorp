import { unstable_cache } from 'next/cache';

export const getCachedBusinessServices = unstable_cache(
  async () => {
    const { getBusinessServices } = await import('./data');
    return getBusinessServices();
  },
  ['business-services'],
  { revalidate: 3600 }
);

export const getCachedTestimonials = unstable_cache(
  async () => {
    const { getTestimonials } = await import('./data');
    return getTestimonials();
  },
  ['testimonials'],
  { revalidate: 3600 }
);