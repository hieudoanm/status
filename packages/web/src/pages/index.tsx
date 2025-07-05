import { CallToAction } from '@status/components/landing/CallToAction';
import { Features } from '@status/components/landing/Features';
import { Footer } from '@status/components/landing/Footer';
import { Hero } from '@status/components/landing/Hero';
import { Navbar } from '@status/components/shared/Navbar';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<>
			<Navbar />
			<div className="w-full border-t border-neutral-800" />
			<Hero />
			<div className="w-full border-t border-neutral-800" />
			<Features />
			<div className="w-full border-t border-neutral-800" />
			<CallToAction />
			<div className="w-full border-t border-neutral-800" />
			<Footer />
		</>
	);
};

export default HomePage;
