import { PageWrapper } from '../components';

function SSR({ data }) {
  return (
    <PageWrapper>
      <h1>SSR Page</h1>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </PageWrapper>
  );
}

export default SSR;

export async function getServerSideProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
