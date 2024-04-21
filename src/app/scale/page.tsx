import Hero from '@/components/hero';

import scaleImg from '/public/scale.jpg';

export default function Scale() {
  return (
    <Hero
			imgData={scaleImg}
			imgAlt="factory."
			title="Scale Your App to Infinity"
		/>
  );
}
