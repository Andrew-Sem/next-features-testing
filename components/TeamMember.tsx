'use client';

import { FC } from 'react';
import { Skeleton } from './ui/skeleton';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const roles = [
	{
		value: 'owner',
		description: 'Admin level access to all resources',
		label: 'Owner',
	},
	{
		value: 'member',
		description: 'Just exists',
		label: 'Member',
	},
	{
		value: 'developer',
		description: 'Can comment, view and edit',
		label: 'Developer',
	},
	{
		value: 'viewer',
		description: 'Can view and comment',
		label: 'Viewer',
	},
];

interface TeamMemberProps {
	name: string;
	email: string;
	role: string;
}

export const TeamMember: FC<TeamMemberProps> = ({ name, email, role: defaultRole }) => {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(defaultRole);
	React.useEffect(() => {
		console.log(value);
	}, [value]);
	return (
		<div className='py-2 flex items-center justify-between'>
			<div className='flex items-center'>
				<Skeleton className='w-10 h-10 rounded-full' />
				<div className='ml-4'>
					<p className='text-sm leading-none font-medium'>{name}</p>
					<p className='text-sm text-muted-foreground'>{email}</p>
				</div>
			</div>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant='outline'
						role='combobox'
						aria-expanded={open}
						className='w-[200px] justify-between'
					>
						{value
							? roles.find((role) => role.value === value)?.label
							: 'Select role...'}
						<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-[200px] p-0'>
					<Command>
						<CommandInput placeholder='Search roles...' />
						<CommandEmpty>No roles found.</CommandEmpty>
						<CommandGroup>
							{roles.map((role) => (
								<CommandItem
									key={role.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? '' : currentValue);
										setOpen(false);
									}}
								>
									<Check
										className={cn(
											'mr-2 h-4 w-4',
											value === role.value ? 'opacity-100' : 'opacity-0'
										)}
									/>
									<div>
										<p>{role.label}</p>
									</div>
								</CommandItem>
							))}
						</CommandGroup>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
};
