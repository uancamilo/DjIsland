import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-gradient-to-tr from-sky-300 to-purple-900 h-[38rem] relative flex items-center">
			<Image
				fill
				src="/images/292503118_196347139398023_8393621662230550858_n.jpg"
				className="object-cover h-96 absolute mix-blend-overlay"
				alt="DJ Island"
			/>
			<div className="text-center absolute w-full">
				<h1 className="font-bold text-slate-300 text-4xl sm:text-5xl md:text-6xl">
					<span className="block text-gray-400 pb-8">DJ Island</span>{" "}
					<span className="block text-gray-600">The Real DJ</span>
				</h1>
				<div className="mt-5 flex justify-center">
					<div className="mt-3 sm:mt-0 sm:ml-3">
						<Link href="/contacto">
							<div className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-200 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:text-lg">
								Realizamos tu evento
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
