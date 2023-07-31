// Middleware to protect pages from unauthenticated users
import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: '/'
    }
});

export const config = {
    matcher: [
        '/users/:path*', // protect all routes starting with /users likes messages, contacts, etc
    ]
};

