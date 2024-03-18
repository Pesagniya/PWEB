
import fatec.poo.model.QuartoHotel;
import java.util.Scanner;

/**
 *
 * @author 0030482221032
 */
public class Aplic {
    
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int option, num;
        double value;
        
        System.out.print("Digite o número do quarto: ");
        num = input.nextInt();
        System.out.print("Digite o valor da diária: ");
        value = input.nextDouble();
        
        QuartoHotel objQuarto = new QuartoHotel(num, value);
        
        while(true){
            System.out.println("\n1 - Consultar Quarto");
            System.out.println("2 - Reservar Quarto");
            System.out.println("3 - Liberar Quarto");
            System.out.println("4 - Consulturar faturamento quarto");
            System.out.println("5 - Sair");
            System.out.println("    Digite a opção:");
            
            option = input.nextInt();
            switch (option) {
                case(1): {      
                    if (objQuarto.getSituacao() == true)
                        System.out.println("O quarto está ocupado.");
                    else
                        System.out.println("O quarto está livre.");
                    break;
                }
                case(2): {
                    if (objQuarto.getSituacao() == true)
                        System.out.println("O quarto já foi reservado.");
                    else {
                        objQuarto.reservar(num);
                        System.out.println("O quarto foi reservado com sucesso.");
                    }
                    break;
                }
                case(3): {
                    if (objQuarto.getSituacao() == false)
                        System.out.println("O quarto já está livre.");
                    else 
                        System.out.println("O quarto foi liberado com sucesso; valor: " + objQuarto.liberar(num));
                    
                    break;
                }
                case(4): {
                    System.out.println("Faturamento do quarto: " + objQuarto.getTotalFaturado());
                    break;
                }
            }
                
            if(option == 5)
                break;  
        }
    }
    
}
