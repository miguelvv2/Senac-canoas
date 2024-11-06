# Declaração de variáveis
nome = ""
valor = 0.0
ac = 0
op = ""
i = 0.0
med = 0.0
com = 0.0

# Início do programa
puts "Digite seu nome: " #escreva
nome = gets.chomp  # escreval ou \n 
system("clear") || system("cls") # limpa a tela 
puts "Olá, #{nome}, Digite os valores de venda!"

# Loop de repetição
begin # enquanto 
  puts "Digite o valor da venda: "
  valor = gets.to_f
  ac += 1
  i += valor

  puts "Deseja continuar? Digite 0 para sair!"
  op = gets.chomp
end while op != "0"

# Cálculo da média e comissão
med = i / ac
com = med * 0.10

# Exibe a média e a comissão
puts "A média das vendas é: #{med} | Comissão: #{com}"
