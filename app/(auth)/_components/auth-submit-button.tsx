import { Button } from "@/components/ui/button";

interface AuthSubmitButtonProps {
  children: string;
}

export function AuthSubmitButton({ children }: AuthSubmitButtonProps) {
  return (
    <div className="pt-2">
      <Button
        type="submit"
        className="w-full h-9 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-200 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] cursor-pointer"
      >
        {children}
      </Button>
    </div>
  );
}
