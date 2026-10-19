export type Service = {
  id: string
  name: string
  price: number
  duration: string
  description: string
}

export const services: Service[] = [
  { id: 'classic', name: 'Classic Cut', price: 50000, duration: '30m', description: 'Precision haircut with styling' },
  { id: 'beard', name: 'Beard Trim', price: 30000, duration: '20m', description: 'Shape & detail your beard' },
  { id: 'fade', name: 'Skin Fade', price: 60000, duration: '40m', description: 'Clean tapered fade' },
  { id: 'royal', name: 'Royal Package', price: 90000, duration: '60m', description: 'Cut + wash + massage + hot towel' },
  { id: 'color', name: 'Hair Color', price: 150000, duration: '90m', description: 'Custom color application' },
]
