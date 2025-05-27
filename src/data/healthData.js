import { HeartPulse, Thermometer } from 'lucide-react';

export const healthIndicators = [
  {
    id: 1,
    label: 'Heart Rate',
    status: 'Healthy',
    icon: HeartPulse, // 👈 This is an icon component, NOT plain text
  },
  {
    id: 2,
    label: 'Body Temperature',
    status: 'Fever',
    icon: Thermometer,
  },
];
