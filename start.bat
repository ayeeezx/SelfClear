@echo off
setlocal EnableExtensions
title Limpador de Mensagens
color 0B
mode con: cols=90 lines=26

set "SCRIPT=%~dp0index.js"

REM ---------- CHECAGEM ARQUIVO ----------
if not exist "%SCRIPT%" (
  echo [91m==================================================[0m
  echo [91m[ERRO] O arquivo index.js nao foi encontrado.[0m
  echo [96m--------------------------------------------------[0m
  echo [96m  Coloque este .bat na mesma pasta do arquivo index.js[0m
  echo [91m==================================================[0m
  echo.
  pause
  exit /b
)

REM ---------- CHECAGEM NODE ----------
where node >nul 2>&1 || (
  echo [91m==================================================[0m
  echo [91m[ERRO] O Node.js nao foi encontrado no sistema.[0m
  echo [96m--------------------------------------------------[0m
  echo [96m  Instale pelo site oficial:[0m
  echo [96m     https://nodejs.org/[0m
  echo [91m==================================================[0m
  echo.
  pause
  exit /b
)

REM ---------- CHECAGEM TOKEN (via Node) ----------
node "%SCRIPT%" --check
if errorlevel 1 (
  echo.
  pause
  exit /b
)

REM ---------- PAINEL ----------
:inicio
cls
echo [96m==================================================[0m
echo [96m          LIMPADOR DE MENSAGENS DO DISCORD[0m
echo [96m--------------------------------------------------[0m
echo [96m  Desenvolvido por: [93m@ayeeezx[0m
echo [96m--------------------------------------------------[0m
echo [96m  INSTRUCOES:[0m
echo [96m   1. Ative o "Modo Desenvolvedor" no Discord.[0m
echo [96m   2. Clique com o botao direito no canal.[0m
echo [96m   3. Escolha "Copiar ID do Canal".[0m
echo [96m==================================================[0m
echo.

set /p CHANNEL=[96mDigite o ID do canal: [0m
if not defined CHANNEL goto :inicio

echo.
echo [96m--------------------------------------------------[0m
echo [96m  Token detectado: OK[0m
echo [96m  Canal informado: %CHANNEL%[0m
echo [96m--------------------------------------------------[0m
echo [96mIniciando limpeza...[0m
echo [96m--------------------------------------------------[0m
call node "%SCRIPT%" "%CHANNEL%"
echo [96m--------------------------------------------------[0m
echo [96mOperacao concluida.[0m
echo.
pause
goto :inicio
