using System;

public abstract class Veiculo
{
    protected double TaxaDiaria;

    public Veiculo(double taxa)
    {
        TaxaDiaria = taxa;
    }

    public abstract double CalcularValorTotal(int numDiarias);
}

public class Carro : Veiculo
{
    public Carro() : base(50) { }

    public override double CalcularValorTotal(int numDiarias)
    {
        return TaxaDiaria * numDiarias;
    }
}

public class Moto : Veiculo
{
    public Moto() : base(25) { }

    public override double CalcularValorTotal(int numDiarias)
    {
        return TaxaDiaria * numDiarias;
    }
}

class Program
{
    static void Main()
    {
        Veiculo carro = new Carro();
        Veiculo moto = new Moto();
        
        Console.WriteLine("Carro: R$ " + carro.CalcularValorTotal(10));
        Console.WriteLine("Moto: R$ " + moto.CalcularValorTotal(10));
    }
}
