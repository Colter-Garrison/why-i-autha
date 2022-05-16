// Enter Supabase Information
const SUPABASE_URL = 'https://kmhqgenaissywlajjynm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttaHFnZW5haXNzeXdsYWpqeW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTMyNzAsImV4cCI6MTk2Nzg2OTI3MH0.yCD3SIn98ENixn-CMEd0ji60cOH51uEXLQIEhjqddDI';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function signInUser(email, password) {}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {}

export async function logout() {}
