import { SlideIntroType } from "@/types/SlideIntroType";

export const slides: SlideIntroType[] = [
  {
    id: 'slide1',
    title: 'Start Journey \nWith Us',
    text: 'Find the best shoes for every style and grace.',
    image: require('@/assets/images/shoes/shoes-01.png'), 
    backgroundColor: '#59b2ab',
  },
  {
    id: 'slide2',
    title: 'We made it \nfor you',
    text: 'Discover our exclusive collection with comfort, fashion and quality.',
    image: require('@/assets/images/shoes/shoes-02.png'),
    backgroundColor: '#f7054f',
  },
  {
    id: 'slide3',
    title: 'Fast and Safe Purchase',
    text: 'Sign up and start creating your look right now.',
    image: require('@/assets/images/shoes/shoes-03.png'),
    backgroundColor: '#012440',
    icon: 'shield-checkmark-outline'
  },
];