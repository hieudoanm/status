import { APP_NAME } from '@status/constants';
import Link from 'next/link';
import { FC } from 'react';

export const Hero: FC = () => {
	return (
		<section className="w-full py-20">
			<div className="mx-auto flex max-w-3xl flex-col gap-y-8 text-center">
				<h2 className="text-4xl font-extrabold text-neutral-100 sm:text-5xl">{APP_NAME}</h2>
				<p className="text-lg text-neutral-500">
					Track the status of major cloud platforms in real-time — fast, lightweight, and private.
				</p>
				<div>
					<Link href="/app">
						<button type="button" className="cursor-pointer rounded-full border border-neutral-800 px-6 py-3">
							Check Status
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};
