/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fatec.poo.model;

/**
 *
 * @author 0030482221032
 */
public class QuartoHotel {
    private int numQuarto;
    private double valorDiaria;
    private int numRG;
    private boolean situacao;
    private double totalFaturado;
    
    public QuartoHotel(int n, double v) {
        numQuarto = n;
        valorDiaria = v;
    }

    public void reservar(int n) {
        situacao = true;
    }
    
    public double liberar(double v) {
        totalFaturado += v * valorDiaria;
        numRG = 0;
        situacao = false;
        
        return (v * valorDiaria);
    }
    
    public boolean getSituacao() {
        return situacao;
    }
    
    public double getTotalFaturado() {
        return totalFaturado;
    }
    
}
