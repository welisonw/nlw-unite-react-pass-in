import nlwUniteLogo from '../assets/nlw-unite-icon.svg';

export const Header = () => {
	return (
		<div className='flex items-center gap-5 py-2'>
			<img src={nlwUniteLogo} alt='Logo NLW Unite' />

			<nav className='flex items-center gap-5'>
				<a href='' className='font-medium text-sm text-zinc-300'>
					Eventos
				</a>
				<a href='' className='font-medium text-sm'>
					Participantes{' '}
				</a>
			</nav>
		</div>
	);
};
