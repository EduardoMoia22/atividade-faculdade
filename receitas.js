const recipes = [
      {
            "titulo": "Bolo de Chocolate",
            "slug": "bolo-de-chocolate",
            "descricao": "Conheça nosso bolo de chocolate dos sonhos! Uma explosão de cacau em uma textura úmida que derrete na boca.",
            "ingredientes": [
                  "Farinha",
                  "Açúcar",
                  "Chocolate",
                  "Ovos",
                  "Fermento",
                  "Leite",
                  "Manteiga",
                  "Sal"
            ],
            "instrucoes": "1. Pré-aqueça o forno a 180°C e unte uma forma.\n2. Misture a farinha, o açúcar, o chocolate e o fermento em uma tigela.\n3. Adicione os ovos, o leite e a manteiga derretida à mistura seca.\n4. Misture bem até obter uma massa homogênea.\n5. Despeje a massa na forma e leve ao forno por 30-40 minutos ou até que um palito inserido no centro saia limpo.\n6. Deixe o bolo esfriar antes de desenformar e servir.",
            "imagem": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/bbc6433c1c89829ad91c986a46dfb4bc.jpg"
      },
      {
            "titulo": "Brownie com Confete",
            "slug": "brownie-com-confete",
            "descricao": "Descubra o segredo por trás do nosso brownie de chocolate. Uma combinação perfeita de textura macia e sabor rico, com um toque de nozes para uma experiência indulgente.",
            "ingredientes": [
                  "Chocolate",
                  "Nozes",
                  "Farinha",
                  "Açúcar",
                  "Ovos",
                  "Manteiga",
                  "Sal"
            ],
            "instrucoes": "1. Pré-aqueça o forno a 180°C e unte uma forma.\n2. Derreta o chocolate e a manteiga em banho-maria.\n3. Misture a farinha, o açúcar, as nozes picadas e o sal em uma tigela.\n4. Adicione os ovos à mistura de chocolate e manteiga.\n5. Combine a mistura de chocolate com os ingredientes secos até obter uma massa homogênea.\n6. Despeje a massa na forma e leve ao forno por 25-30 minutos.\n7. Deixe esfriar antes de cortar em pedaços e servir.",
            "imagem": "https://recipesblob.oetker.com.br/assets/ae7eb9c0599b47b7b4e9938fe617925c/964x526/browniechocdisco.jpg"
      },
      {
            "titulo": "Tiramisu",
            "slug": "tiramisu",
            "descricao": "Viaje para a Itália com nosso tiramisu clássico. Camadas de biscoitos embebidos em café e creme de mascarpone sedoso criam uma experiência inesquecível.",
            "ingredientes": [
                  "Biscoitos",
                  "Café",
                  "Mascarpone",
                  "Ovos",
                  "Açúcar",
                  "Rum",
                  "Cacau em pó"
            ],
            "instrucoes": "1. Misture o café e o rum em uma tigela rasa.\n2. Mergulhe rapidamente os biscoitos no café e arrume-os em uma camada em uma forma.\n3. Bata as gemas com o açúcar até obter uma mistura clara e fofa.\n4. Adicione o mascarpone à mistura de gemas e açúcar.\n5. Bata as claras em neve e incorpore-as delicadamente à mistura de mascarpone.\n6. Despeje metade da mistura de mascarpone sobre os biscoitos.\n7. Repita as camadas de biscoitos e mascarpone.\n8. Polvilhe cacau em pó sobre a última camada.\n9. Deixe refrigerar por pelo menos 4 horas antes de servir.",
            "imagem": "https://static.itdg.com.br/images/360-240/2887f8e671abd581779918adeac1db98/shutterstock-2151535997.jpg"
      },
      {
            "titulo": "Palha Italiana",
            "slug": "palha-italiana",
            "descricao": "Encante-se com nossa palha italiana, uma sobremesa decadente que combina brigadeiro cremoso e biscoitos crocantes em cada mordida.",
            "ingredientes": [
                  "Leite condensado",
                  "Creme de leite",
                  "Biscoitos",
                  "Chocolate",
                  "Manteiga"
            ],
            "instrucoes": "1. Em uma panela, derreta a manteiga e acrescente o leite condensado.\n2. Adicione o creme de leite e mexa até obter uma mistura homogênea.\n3. Quebre os biscoitos em pedaços pequenos e acrescente-os à mistura, mexendo bem.\n4. Despeje a mistura em uma forma untada e alise a superfície.\n5. Deixe esfriar na geladeira por pelo menos 2 horas.\n6. Corte em quadrados e sirva.",
            "imagem": "https://img.cybercook.com.br/receitas/667/palha-italiana-7.jpeg"
      },
      {
            "titulo": "Pudim",
            "slug": "pudim",
            "descricao": "Descubra a perfeição com nosso pudim clássico. Textura sedosa, sabor delicado de baunilha - uma sobremesa reconfortante e satisfatória.",
            "ingredientes": [
                  "Leite condensado",
                  "Leite",
                  "Ovos",
                  "Açúcar",
                  "Baunilha"
            ],
            "instrucoes": "1. Preaqueça o forno a 180°C.\n2. Misture o leite condensado, o leite, os ovos e a baunilha em um liquidificador até ficar homogêneo.\n3. Caramelize uma forma com açúcar e despeje a mistura do liquidificador.\n4. Asse em banho-maria por cerca de 1 hora, ou até que um palito inserido no centro saia limpo.\n5. Deixe esfriar completamente antes de desenformar e servir.",
            "imagem": "https://conteudo.imguol.com.br/c/entretenimento/54/2023/04/20/pudim-de-leite-condensado-1682011837513_v2_900x506.jpg"
      },
      {
            "titulo": "Cookie Recheado com Nozes",
            "slug": "cookie-recheado-com-nozes",
            "descricao": "Transforme seus momentos com nosso cookie recheado com nozes. Crocante por fora, macio por dentro, com pedaços generosos de nozes.",
            "ingredientes": [
                  "Farinha",
                  "Açúcar",
                  "Manteiga",
                  "Nozes",
                  "Chocolate",
                  "Ovos",
                  "Sal"
            ],
            "instrucoes": "1. Preaqueça o forno a 180°C e forre uma assadeira com papel manteiga.\n2. Em uma tigela grande, misture a farinha, o sal e o bicarbonato de sódio.\n3. Em outra tigela, bata a manteiga e o açúcar até ficar cremoso.\n4. Adicione os ovos, um de cada vez, batendo bem após cada adição.\n5. Misture a mistura de manteiga com os ingredientes secos até ficar homogêneo.\n6. Adicione as nozes e o chocolate picado à massa e misture bem.\n7. Deixe a massa na geladeira por pelo menos 30 minutos.\n8. Com uma colher de sorvete, faça bolas de massa e coloque na assadeira preparada.\n9. Asse por 10-12 minutos ou até dourar nas bordas.\n10. Deixe esfriar na assadeira por alguns minutos antes de transferir para uma grade para esfriar completamente.",
            "imagem": "https://www.confeiteiradesucesso.com/wp-content/uploads/2022/02/cookiecomnozes.jpg"
      }
]