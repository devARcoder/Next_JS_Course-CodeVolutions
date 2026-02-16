import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications (){
    return (
        <Card>
            <div>
                <h2>Notifications</h2>
                <p>You have 10 new notifications.</p>
                <Link href="/complex-dashboard">Default Notifications</Link>
            </div>
        </Card>
    )
}