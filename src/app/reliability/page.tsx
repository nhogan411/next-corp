import Hero from '@/components/hero';

import reliabilityImg from '/public/reliability.jpg';

export default function Reliability() {
  return (
		<Hero
			imgData={reliabilityImg}
			imgAlt="welder."
			title="Highly Reliable Hosting"
		/>
  );
}
