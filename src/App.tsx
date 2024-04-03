import { Header } from './components/Header';
import { AttendeeList } from './components/Attendee-list';

export function App() {
	return (
		<div className='flex flex-col gap-2 max-w-[1216px] mx-auto px-8 py-5 '>
			<Header />
			<AttendeeList />
		</div>
	);
}
