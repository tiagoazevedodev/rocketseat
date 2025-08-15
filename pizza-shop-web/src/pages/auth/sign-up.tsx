import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";
import { Phone } from "lucide-react";

const SignUpForm = z.object({
  email: z.email(),
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
});

type SignUpForm = z.infer<typeof SignUpForm>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();
  const navigate = useNavigate();

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Restaurante cadastrado com sucesso!", {
        action: {
          label: "Login",
          onClick: () => {navigate("/sign-in");},
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Erro ao cadastrar restaurante, tente novamente.");
      return;
    }
  }

  return (
    <div className="p-8">
      <Button asChild variant={"ghost"} className="absolute top-8 right-8">
        <Link to="/sign-in">Fazer login</Link>
      </Button>

      <div className="flex w-[320px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta grátis
          </h1>
          <p className="text-muted-foreground text-sm">
            Seja um parceiro e acompanhe suas vendas pelo painel do parceiro
          </p>
        </div>
        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
            <Input
              type="text"
              id="restaurantName"
              {...register("restaurantName")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome</Label>
            <Input type="managerName" id="text" {...register("managerName")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input type="email" id="email" {...register("email")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Seu celular</Label>
            <Input type="tel" id="phone" {...register("phone")} />
          </div>

          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Finalizar Cadastro
          </Button>
          <p className="loading-relaxed text-muted-foreground px-6 text-center text-sm">
            Ao continuar, você concorda com os nossos{" "}
            <a className="underline">Termos de Serviço</a> e{" "}
            <a className="underline">Política de Privacidade</a>.
          </p>
        </form>
      </div>
    </div>
  );
}
