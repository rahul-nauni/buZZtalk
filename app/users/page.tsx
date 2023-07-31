import EmptyState from "../components/EmptyState";
const Users = () => {
    return (
        // NextAuth Sign Out using arrow function
        /* <button onClick={() => signOut()}>Sign Out</button> */
        <div className="hidden lg:block lg:pl-80 h-full">
            <EmptyState />
        </div>
    );
}

export default Users;