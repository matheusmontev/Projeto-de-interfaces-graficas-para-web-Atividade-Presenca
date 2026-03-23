# Contador Angular

Aplicação simples de contador desenvolvida com **Angular 17**, criada como atividade de presença da disciplina de Interfaces Gráficas para Web.

## Funcionalidades

- Valor inicial começa em **0**
- Botão **Aumentar** para incrementar o valor
- Botão **Diminuir** para decrementar o valor
- O valor atual é exibido na tela em tempo real

## Estrutura

```
src/
├── app/
│   ├── app.component.ts       # Lógica do contador (incrementar/decrementar)
│   ├── app.component.html     # Template com display e botões
│   ├── app.component.css      # Estilos do componente
│   └── app.config.ts          # Configuração do Angular
├── styles.css                 # Estilos globais
├── index.html                 # HTML raiz
└── main.ts                    # Bootstrap da aplicação
```