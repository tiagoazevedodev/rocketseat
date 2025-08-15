import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "react-router";

const SignInForm = z.object({
  email: z.email(),
});

type SignInForm = z.infer<typeof SignInForm>;

export function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>();

  async function handleSignin(data: SignInForm) {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Enviamos um link de autenticação para o seu e-mail.");
  }

  return (
    <div className="p-8">
      <Button asChild variant={"ghost"} className="absolute right-8 top-8">
        <Link to="/sign-up">
          Novo Estabelecimento
        </Link>
      </Button>
      <div className="flex w-[320px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-muted-foreground text-sm">
            Acompanhe suas vendas pelo painel do parceiro
          </p>
        </div>
        <form onSubmit={handleSubmit(handleSignin)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input type="email" id="email" {...register("email")} />
          </div>
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Acessar painel
          </Button>
        </form>
      </div>
    </div>
  );
}
