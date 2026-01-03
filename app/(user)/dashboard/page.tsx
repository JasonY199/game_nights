import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cookies } from "next/headers";

async function signOut() {
  "use server";
  const supabase = await createClient();
  await supabase.auth.signOut();

  // Set a cookie to show toast on redirect
  const cookieStore = await cookies();
  cookieStore.set("logout-toast", "true", {
    httpOnly: false,
    maxAge: 5,
    path: "/",
  });

  redirect("/");
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/signin");
  }

  return (
    <main className="relative flex flex-1 items-center justify-center py-12 px-6">
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-blue-500/10" />

      <div className="relative w-full max-w-2xl mx-auto">
        <Card className="border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-2xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight pb-1">
              Welcome to Game Nights!
            </CardTitle>
            <CardDescription>You are successfully logged in</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Email:</span>{" "}
                {user.email}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">User ID:</span>{" "}
                {user.id}
              </p>
            </div>

            <form action={signOut}>
              <Button
                type="submit"
                variant="outline"
                className="w-full border-purple-400/40 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-400/60 text-foreground transition-all duration-300 hover:shadow-md hover:shadow-purple-500/10"
              >
                Sign Out
              </Button>
            </form>

            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground text-center">
                This is a test page to verify Google OAuth login is working.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
