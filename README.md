# Auth Context
<p>Projeto com o simples objetivo de treinar o uso do hook useContext no React. onde o usuário digita seu nome, idade e escolhe um curso, em seguida os 
dados são exibidos na tela.</p>
<img src="https://github.com/sian19/Auth-Context/blob/master/src/assets/img.png">
<h3>oque foi feito durante o desenvolvimento:</h3>
<p>se criou um componente para gerenciar os valores de um objeto usando o hook useContext, dentro desse componente fica armazenado um objeto com 
o nome, idade, curso e matrícula de um aluno. Em seguida usando o componente que fica encarregado de gerenciar os valores do objeto, se criou outros componentes que são
filhos desse componente gerenciador, feito dessa forma os componentes filhos tem o acesso do objeto criado no componente pai gerenciador, fazendo isso os componentes filhos
podem alterar os valores do objeto, dessa forma facilitando para que os valores digitados nos campos inputs dentro dos componentes filhos possam ser passados para esse objeto
. Também se criou uma propriedade desse objeto chamada matrícula, onde a cada vez que o usuário digita o nome, idade e o curso, é criado um número aleatório de 1 a 99 e 
esse número é colocado dentro da propriedade objeto, onde representa o número da matrícula do aluno. se criou um algoritimo para evitar que números de matriculas repetidos
sejam armazenados dentro de uma propriedade do objeto chamada de ids, ou seja, não é permitido números de matrículas iguais na aplicação.</p>
