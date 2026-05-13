import { redirect } from "next/navigation";
import { page_routes } from "@/lib/routes-config";

export default function Home() {
  // Redirection instantanée côté serveur
  redirect(`${page_routes[0].href}`);
}
