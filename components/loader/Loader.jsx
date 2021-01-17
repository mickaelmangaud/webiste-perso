import { useSession } from 'next-auth/client';
import { LoaderWrapper } from './styles';

export const Loader = () => {
  const [ session, loading ] = useSession()

  return (
    <LoaderWrapper loadingSession={loading}>
      Loader!!!!!!!
    </LoaderWrapper>
  )
}