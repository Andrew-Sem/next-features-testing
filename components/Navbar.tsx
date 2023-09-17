import { Skeleton } from '@/components/ui/skeleton';

export const Navbar = () => {
	return (
		<div className='sticky top-0 py-5 border-b '>
			<div className='flex items-center justify-between container mx-auto'>
				<div className='flex items-center'>
					<Skeleton className='w-32 h-10' />
					<div className='hidden lg:flex space-x-4 ml-10'>
						<Skeleton className='w-20 h-5' />
						<Skeleton className='w-20 h-5' />
						<Skeleton className='w-20 h-5' />
						<Skeleton className='w-20 h-5' />
						<Skeleton className='w-20 h-5' />
					</div>
				</div>
				<div>
					<Skeleton className='w-10 h-10 rounded-full' />
				</div>
			</div>
		</div>
	);
};
