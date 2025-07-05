import { FC } from 'react';

export const Features: FC = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto p-4 text-center md:p-8">
				<h3 className="text-3xl font-semibold sm:text-4xl">Why Use Status?</h3>
				<p className="mx-auto mt-4 max-w-3xl text-neutral-500">
					Get real-time insights into the health of your favorite cloud platforms — fast, reliable, and completely
					private.
				</p>
				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">📡 Real-Time Monitoring</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Check the current status of popular cloud services like AWS, Google Cloud, Azure, and more.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🔒 100% Private</h4>
						<p className="mt-2 text-sm text-neutral-500">
							No sign-in, no tracking — everything runs locally in your browser for total privacy.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">⚡ Fast & Lightweight</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Built for speed with a clean, minimal UI. Get service status updates in seconds without the bloat.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
