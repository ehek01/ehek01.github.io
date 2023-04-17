import { useRouter } from 'next/router';
import Join from "../../components/video/Join";
import Test from "../../components/video/Test";

export default function VideoSlug() {
  const router = useRouter();
  const { slug } = router.query;

  if (slug && slug[0] === 'join') {
    return <Join />;
  } else if (slug && slug[0] === 'test') {
    return <Test />;
  } else {
    return <p>Invalid URL. Please check the address.</p>;
  }
}
