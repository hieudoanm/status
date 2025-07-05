import { Status } from '@status/components/app/Status';
import { Footer } from '@status/components/landing/Footer';
import { Navbar } from '@status/components/shared/Navbar';

const HomePage = () => {
	return (
		<div className="flex h-screen flex-col">
			<Navbar />
			<div className="w-full border-t border-neutral-800" />
			<div className="container mx-auto grow p-4 md:p-8">
				<Status />
			</div>
			<div className="w-full border-t border-neutral-800" />
			<Footer />
		</div>
	);
};

export default HomePage;
