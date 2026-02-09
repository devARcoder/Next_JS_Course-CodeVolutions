export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor: "black",
          padding: "1rem",
          color: "white",
          fontSize: "1.5rem",
          textAlign: "center",
        }}>
          <p>Header</p>
        </header>
        <main style={{
          backgroundColor: "gray",
          padding: "1rem",
          color: "white",
          fontSize: "1.5rem",
          textAlign: "center",
        }}>
          {children}
          </main>
        <footer style={{
          backgroundColor: "black",
          padding: "1rem",
          color: "white",
          fontSize: "1.5rem",
          textAlign: "center",
        }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}