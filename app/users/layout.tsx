import Sidebar from '../components/sidebar/Sidebar';

// reason why its async is because we are going to be fetching data from the server
export default async function UsersLayout({ 
    children 
}:{
    children: React.ReactNode;
}) {
    return (
        <Sidebar>
            <div className="h-full">
                {children}
            </div>
        </Sidebar>
    );
}