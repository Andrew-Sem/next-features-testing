import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='mt-5 flex'>
			<Skeleton className='w-40 h-20' />
		</div>
	);
}
