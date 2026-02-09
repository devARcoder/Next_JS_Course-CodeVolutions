export default function AuthLayout({
    children,
} : {
    children: React.ReactNode;
}){
    return (
        <div>
            <h1>Inner layout</h1>
            {children}
        </div>
    )
}