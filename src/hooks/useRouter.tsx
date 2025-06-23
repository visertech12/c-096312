import {useRouter as useRouterNext} from 'next/navigation';

export const useRouter = () => {
  const router = useRouterNext();
  return router;
};
