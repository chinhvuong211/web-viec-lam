import DeveloperFooter from '@/components/layout/Footer';

export default function Developer3Footer() {
    return (
        <DeveloperFooter
            theme={{
                social: 'text-light-primary',
                message: 'text-light-primary',
                email: 'text-theme-primary',
                copyright: 'text-light-primary',
                router: 'text-light-primary',
                routerContainer: 'light:border-t pt-5  border-developer-style3-primary',
            }}
        />
    );
}
