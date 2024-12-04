# **Restaurante-Final**

Projeto final desenvolvido para o curso de Análise e Desenvolvimento de Sistemas (ADS), na disciplina de Desenvolvimento de Sistemas Web.  

---

## **GEN - Pizzaria Genérica**  
A *Gen* é uma pizzaria que une a tradição das receitas italianas à modernidade de um sistema digital integrado. Mais do que apenas um restaurante, *Gen* oferece uma experiência gastronômica diferenciada, alinhada com tecnologia para facilitar o dia a dia de clientes e administradores.  

### **Objetivo**  
No cenário atual, pizzarias enfrentam desafios como organização de pedidos, reservas e feedbacks. O sistema da *Gen* resolve essas questões por meio de uma plataforma moderna, intuitiva e escalável, ideal para pizzarias de pequeno e médio porte que buscam melhorar suas operações e oferecer um atendimento de excelência.  

---

## **Wireframes**  
O projeto conta com cinco telas principais:  
1. **Tela Inicial** - Inclui header, home, menu, avaliação e footer. Serve como a página matriz que redireciona os usuários para as demais funcionalidades.  
2. **Carrinho** - Conectado ao Firestore para listar e gerenciar os pedidos.  
3. **Login e Cadastro** - Para autenticação dos usuários.  

---

## **Tecnologias e Integrações**  

### **Explicação do Código**  
O site foi desenvolvido com **HTML**, **CSS** e **JavaScript**, vinculado ao backend em **Node.js** com o framework **Express.js**, permitindo a criação de rotas para navegação entre as páginas.  

Após a estruturação inicial, foi integrada a plataforma **Firebase** para:  
- **Autenticação**: Gerenciar login, registro e usuários ativos.  
- **Banco de Dados Firestore**: Inserção, exclusão e gerenciamento de dados, como pratos e pedidos.  

Outro ponto importante foi organizar os scripts do Firebase no projeto. Cada funcionalidade foi separada para que o código não ficasse bagunçado, e foi aplicado async/await em todas as funções que precisavam de retorno do Firestore. Isso ajudou a evitar erros de leitura e escrita, além de melhorar a performance.  

---

### **Explicação do Modelo MVC**  
O projeto foi estruturado seguindo o padrão **MVC (Model-View-Controller)**, que ajuda na organização do código e facilita a manutenção e evolução do sistema.  

- **Model (Modelo)**  
  Aqui é onde a lógica de dados está centralizada. No projeto, o Firebase Firestore é utilizado como banco de dados, onde coleções como `pratos`, `pedidos` e `usuarios` são armazenadas e manipuladas. Cada operação de leitura ou escrita no banco segue as regras definidas neste componente.  

- **View (Visualização)**  
  É a interface com o usuário, construída com **HTML**, **CSS** e **JavaScript**. É onde as informações são exibidas e as ações são iniciadas. Exemplo: ao carregar o menu de pratos ou ao mostrar o carrinho com os itens adicionados.  

- **Controller (Controlador)**  
  O controlador é a ponte entre o **Model** e a **View**. Com o uso do **Node.js** e **Express.js**, as rotas foram criadas para receber as requisições do usuário, buscar ou enviar dados para o **Model** e retornar as informações para a **View**.  

### **Como isso funciona no projeto?**  
1. O cliente acessa o site e solicita o menu.  
2. A **View** (interface) envia a solicitação para o **Controller** via rota `GET /pratos`.  
3. O **Controller** processa a requisição, busca os dados no **Model** (Firebase Firestore) e retorna a lista de pratos.  
4. A **View** recebe os dados e exibe o menu para o usuário.  

Seguir o padrão **MVC** deixou o código mais limpo e organizado, separando responsabilidades e permitindo que cada componente funcione de forma independente.  

---

### **Funcionalidades Técnicas (Firebase)**  
- **Banco de Dados**:  
  - Coleções: `pratos`, `pedidos`, `usuarios`.  
  - CRUD: Inserção, atualização e exclusão de dados.  

- **Autenticação**:  
  - Login por e-mail e senha.  

- **Rotas Backend**:  
  - **GET /pratos**: Lista todos os pratos.  
  - **POST /pedidos**: Cria um novo pedido.  
  - **PUT /pedidos/:id**: Atualiza o status do pedido.  
  - **DELETE /pratos/:id**: Remove um prato.  

---

## **Desafios Enfrentados**  
1. **Integração com Firebase**:  
   A vinculação inicial foi desafiadora devido à desatualização de alguns tutoriais utilizados como base.  

2. **Gerenciamento de Estoque**:  
   O desenvolvimento das rotas no backend exigiu atenção especial e, apesar dos esforços, não foi concluído como planejado.  

3. **Interface Responsiva**:  
   A responsividade apresentou dificuldades, especialmente com as alterações ao longo do projeto.  

---

## **Conclusão**  
Embora o projeto não tenha sido implementado em sua totalidade, ele representou uma grande oportunidade de aprendizado. A experiência com **Firebase** foi enriquecedora e certamente será aplicada em futuros projetos.  

No entanto, ainda há um caminho a percorrer para consolidar conhecimentos sobre **Node.js** e **Express.js**, o que será uma etapa importante para aprimorar habilidades e evoluir tecnicamente.  

**Planos Futuros**:  
- Finalizar o backend para gerenciamento completo dos pratos.  
- Implementar pagamentos online.  
- Melhorar o sistema de notificações para usuários e administradores.  

---

## **Referências**  
- [Base de Firebase (vídeo)](https://www.youtube.com/watch?v=oFp7twsVEiE)  
- [Firebase no Projeto (vídeo)](https://www.youtube.com/watch?v=NZzekYgLYdg)  
- [Documentação Oficial do Firebase](https://firebase.google.com/docs/web/setup?hl=pt-br)  
