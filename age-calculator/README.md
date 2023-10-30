# Frontend Mentor - Solução de Aplicativo de Calculadora de Idade

Esta é uma solução para o [desafio de aplicativo de calculadora de idade no Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Visão geral

### O desafio

Os usuários devem ser capazes de:

- Visualizar a idade em anos, meses e dias após enviar uma data válida por meio do formulário
- Receber erros de validação se:
  - Qualquer campo estiver vazio quando o formulário for enviado
  - O número do dia não estiver entre 1-31
  - O número do mês não estiver entre 1-12
  - O ano estiver no futuro
  - A data for inválida, por exemplo, 31/04/1991 (abril tem 30 dias)
- Ver o layout ideal para a interface, dependendo do tamanho da tela do dispositivo
- Ver os estados de foco e foco para todos os elementos interativos na página
- **Bônus**: ver os números de idade animados até o número final quando o formulário for enviado

### Captura de tela

![Captura de tela](./design/desktop-completed.jpg)

### Links

- URL da solução: [Adicionar URL da solução aqui](https://github.com/gabriel-rocha-pimentel/Front-End_Mentor-Junior.git)
- URL do site ao vivo: [Adicione URL do site ao vivo aqui](https://age-calculator-273t.onrender.com/)

## Meu processo

### Construído com

- Marcação HTML5 semântica
- CSS customizado
- Flexbox
- Fluxo de trabalho móvel primeiro
- [Python](https://www.python.org/) - Linguagem de programação
- [Flask](https://flask.palletsprojects.com/) - Micro-framework web para Python

### O que aprendi

Durante este projeto, aprendi a usar o Flask, um micro-framework web em Python, para criar um aplicativo de calculadora de idade. Também aprimorei minhas habilidades em HTML, CSS e JavaScript para construir a interface do usuário interativa.

Aqui está um exemplo de código Python que mostra como calcular a idade com base na data fornecida pelo usuário:

```python
from datetime import datetime

def calculate_age(input_date):
    today = datetime.now()
    birth_date = datetime.strptime(input_date, '%Y-%m-%d')
    age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))
    return age
   
```
## Desenvolvimento contínuo

Neste projeto, tenho a oportunidade de aprender o básico do Flask. No futuro, pretendo aprimorar minhas habilidades em Python e expandir meu conhecimento em outras tecnologias web, como frameworks JavaScript e banco de dados.

### Recursos úteis
- [Documentação do Flask](https://flask.palletsprojects.com/) - Uma ótima fonte para aprender mais sobre o Flask e suas funcionalidades.
- [W3Schools - Tutorial de Python](https://www.w3schools.com/python/) - Um recurso útil para aprender Python do zero.

# autor
- [GitHub](https://github.com/gabriel-rocha-pimentel/) - Gabriel Rocha
- [Mentor_Frontend](https://www.frontendmentor.io/profile/kingthecode) - Gabriel Rocha
- [Instagram](https://www.instagram.com/gabriel_programer/) - gabriel_programer
