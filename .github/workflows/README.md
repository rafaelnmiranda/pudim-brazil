# GitHub Actions - Cron Jobs

Este diretório contém workflows do GitHub Actions configurados para executar tarefas automaticamente em intervalos regulares usando cron.

## Workflows Disponíveis

### 1. `cron.yml` - Build e Lint Automático
Executa build e lint do projeto diariamente.

**Horário padrão:** Diariamente às 2h UTC

**O que faz:**
- ✅ Instala dependências
- ✅ Executa lint
- ✅ Executa build
- ✅ Notifica sucesso/falha

### 2. `cron-custom.yml` - Tarefas Customizadas
Workflow flexível que permite escolher qual tarefa executar.

**Horário padrão:** Diariamente às 2h UTC

**Tarefas disponíveis:**
- `all` - Executa todas as tarefas (lint + build)
- `build` - Apenas build
- `lint` - Apenas lint
- `test` - Testes (quando configurado)

## Como Personalizar o Horário

Edite o arquivo `.github/workflows/*.yml` e modifique a linha `cron`:

```yaml
schedule:
  - cron: '0 2 * * *'  # Formato: minuto hora dia mês dia-da-semana
```

### Exemplos de Horários

- `'0 0 * * *'` - Diariamente à meia-noite UTC
- `'0 */6 * * *'` - A cada 6 horas
- `'0 9 * * 1'` - Toda segunda-feira às 9h UTC
- `'0 0 1 * *'` - Primeiro dia de cada mês à meia-noite UTC
- `'0 14 * * *'` - Diariamente às 14h UTC (11h horário de Brasília)

**Ferramenta útil:** [crontab.guru](https://crontab.guru/) para criar expressões cron

## Execução Manual

Você pode executar os workflows manualmente:

1. Vá para a aba **Actions** no GitHub
2. Selecione o workflow desejado
3. Clique em **Run workflow**
4. Para `cron-custom.yml`, escolha a tarefa a executar

## Variáveis de Ambiente

Se precisar de variáveis de ambiente (como `NEXT_PUBLIC_SITE_URL`):

1. Vá em **Settings** > **Secrets and variables** > **Actions**
2. Adicione as variáveis necessárias
3. Descomente e ajuste as linhas `env:` nos workflows

## Adicionar Novas Tarefas

Para adicionar novas tarefas ao cron:

1. Edite o arquivo `cron-custom.yml`
2. Adicione uma nova opção no `workflow_dispatch.inputs.task.options`
3. Adicione o caso correspondente no script bash

Exemplo:
```yaml
options:
  - all
  - build
  - lint
  - test
  - deploy  # Nova tarefa
```

E no script:
```bash
deploy)
  echo "🚀 Executando deploy..."
  # Seu comando de deploy aqui
  ;;
```

## Notificações

Os workflows podem ser configurados para enviar notificações (email, Slack, etc.) em caso de falha. Para isso, adicione steps adicionais usando actions como:
- `actions/github-script` para criar issues
- Integrações com Slack/Discord
- Envio de emails

## Observações

- ⏰ Os horários são em **UTC** (horário universal)
- 🔄 O GitHub pode atrasar a execução em até 15 minutos
- 💰 Workflows em repositórios públicos são gratuitos
- 📊 Veja o histórico de execuções na aba **Actions**
