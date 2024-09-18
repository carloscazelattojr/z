import { Tweet } from '@/types/tweet';
import { user } from './user';

export const tweet: Tweet = {
  id: 123,
  user: user,
  body: 'Outro dia mágico',
  image:
    'https://www.galaxcms.com.br/up_crud_comum/1516/TermosutilizadosnasredessociaisTwitter-20190816160819.jpg',
  likeCount: 532,
  commentCount: 61,
  retweetCount: 0,
  liked: true,
  retweeted: false,
  dataPost: new Date(2024, 8, 1, 10, 0, 0)
};
