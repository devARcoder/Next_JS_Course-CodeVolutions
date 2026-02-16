
export default function DashboardLayout({
  children,
  revenue,
  notifications,
  users,
  login
}: { 
    children: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    users: React.ReactNode;
    login: React.ReactNode;
 }) {
  const isLoggedIn = false;
  return isLoggedIn ?(
    <>
    <div>

    <div>{children}</div>
    <div style={{display: "flex"}}>
        <div style={{display: "flex", flexDirection: "column"}}>
            <div>{users}</div>
            <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1}}>{notifications}</div>
    </div>
    </div>
    </>
  ) : (
    <div>{login}</div>
  );
}