import { TeamMember } from '@/components/TeamMember';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const TeamPage = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Team members</CardTitle>
				<CardDescription>Invite your team members to collaborate.</CardDescription>
			</CardHeader>
			<CardContent>
				<TeamMember name='Sofia Davis' email='m@example.com' role='owner' />
				<TeamMember name='Jackson Lee' email='p@example.com' role='member' />
			</CardContent>
		</Card>
	);
};

export default TeamPage;
