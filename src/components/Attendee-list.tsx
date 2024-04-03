import { Search } from 'lucide-react';

export const AttendeeList = () => {
	return (
		<header className='flex items-center gap-3'>
			<h2 className='text-2xl font-bold'>Participantes</h2>
			<div className='flex items-center gap-3 w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm'>
				<Search className='size-4 text-emerald-300' />
				<input
					type='text'
					placeholder='Buscar participantes...'
					className='flex-1 bg-transparent outline-none'
				/>
			</div>
		</header>
	);
};
