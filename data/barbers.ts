export type Barber = {
  id: string
  name: string
  specialty: string
  image: string
}

export const barbers: Barber[] = [
  { id: 'master', name: 'Master Barber', specialty: 'Precision & Detail', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600' },
  { id: 'senior', name: 'Senior Stylist', specialty: 'Modern & Trendy', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600' },
  { id: 'groomer', name: 'Groomer', specialty: 'Shaving & Care', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600' },
]
