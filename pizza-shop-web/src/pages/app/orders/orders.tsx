import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, Ghost, Search, X } from "lucide-react";

export function Orders() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        </form>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, index) => (
                <TableRow>
                  <TableCell>
                    <Button variant="outline" size="xs">
                      <Search className="size-3" />
                      <span className="sr-only">Detalhes do pedido</span>
                    </Button>
                  </TableCell>
                  <TableCell className="font-mono text-sm font-medium">
                    2341141234
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    2 horas atrás
                  </TableCell>
                  <TableCell className="">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-slate-400"></span>
                      <span className="text-muted-foreground font-medium">
                        Pendente
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">Tiago Azevedo</TableCell>
                  <TableCell className="font-medium">R$ 45,00</TableCell>

                  <TableCell>
                    <Button variant="outline" size={"xs"}>
                      <ArrowRight className="mr-2 size-3" />
                      Aprovar
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="xs">
                      <X className="mr-2 size-3" />
                      Cancelar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
