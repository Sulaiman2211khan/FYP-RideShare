import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt, faF, faG } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
 // Import FontAwesome brand icons

export function LoginForm({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              {/* Title */}
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Sign In</h1>
                <p className="text-balance text-neutral-500 dark:text-neutral-400">
                  Login to your Rideshare account
                </p>
              </div>

              {/* Email Input */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>

              {/* Password Input */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>

              {/* Login Button */}
              <Button type="submit" className="w-full">
                Login
              </Button>

              {/* Separator */}
              <div
                className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-neutral-200 dark:after:border-neutral-800">
                <span
                  className="relative z-10 bg-white px-2 text-neutral-500 dark:bg-neutral-950 dark:text-neutral-400">
                  Or continue with
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-3 gap-4">
                {/* Apple Login */}
                <Button variant="outline" className="w-full flex justify-center items-center gap-2">
                  <FontAwesomeIcon icon={faAppleAlt} size="lg" />
                  <span className="sr-only">Login with Apple</span>
                </Button>

                {/* Google Login */}
                <Button variant="outline" className="w-full flex justify-center items-center gap-2">
                  <FontAwesomeIcon icon={faG} size="lg" />
                  <span className="sr-only">Login with Google</span>
                </Button>

                {/* Facebook Login */}
                <Button variant="outline" className="w-full flex justify-center items-center gap-2">
                  <FontAwesomeIcon icon={faF} size="lg" />
                  <span className="sr-only">Login with Facebook</span>
                </Button>
              </div>

              {/* Signup Link */}
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
            
                <Link to="/signup" className="underline underline-offset-4">Signup</Link>
              </div>
            </div>
          </form>

          {/* Welcome Section */}
          <div className="relative hidden bg-neutral-100 md:block dark:bg-neutral-800">
            <div className="text-center text-2xl font-semibold my-5">
              Welcome to Ride Share
            </div>
            <img
              src="./src/assets/mainimg.png"
              alt="Welcome"
              className="aspect-[4/3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Terms and Privacy */}
      <div
        className="text-balance text-center text-xs text-neutral-500 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-neutral-900 dark:text-neutral-400 dark:hover:[&_a]:text-neutral-50">
        By clicking continue, you agree to our{" "}
        <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
