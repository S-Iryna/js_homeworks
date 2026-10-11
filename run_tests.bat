@echo off
chcp 65001 >nul
setlocal

rem ===== Налаштування =====
rem Якщо jmeter не додано в PATH, вкажи повний шлях, наприклад:
rem set JMETER=C:\apache-jmeter-5.6.3\bin\jmeter.bat
set JMETER=C:\apache-jmeter-5.5\bin\jmeter.bat
rem Пам'ять для JMeter (для 5000-10000 потоків потрібно багато)
set HEAP=-Xms1g -Xmx4g -XX:MaxMetaspaceSize=256m
rem Ліміт часу відповіді для Duration Assertion, мс
set MAXDUR=1000

if not exist results mkdir results
if not exist reports mkdir reports

echo.
echo Перед запуском переконайся, що Docker-контейнер працює:
echo   http://localhost:3001/characters
echo Відкрий Диспетчер задач (Ctrl+Shift+Esc) і дивись на CPU/пам'ять під час тестів.
echo.
pause

echo ############ ЧАСТИНА 1: без Duration, Loop count ############
call :run1 part1_100users   100   1 1
call :run1 part1_1000users  1000  1 2
call :run1 part1_5000users  5000  1 4

echo ############ ЧАСТИНА 2: Duration Assertion, Loop = Infinity ############
call :run2 part2_1000users_30s   1000  2 30
call :run2 part2_5000users_60s   5000  3 60
call :run2 part2_10000users_180s 10000 5 180

echo.
echo ГОТОВО. HTML-звіти лежать у папці reports\ (відкрий index.html у кожній).
pause
exit /b

rem ---- %1=назва  %2=threads  %3=ramp-up  %4=loops ----
:run1
echo.
echo ===== %1 : threads=%2 ramp=%3 loops=%4 =====
if exist "reports\%1" rmdir /s /q "reports\%1"
if exist "results\%1.jtl" del /q "results\%1.jtl"
call %JMETER% -n -t plan_part1.jmx -Jthreads=%2 -Jramp=%3 -Jloops=%4 -l "results\%1.jtl" -e -o "reports\%1"
echo Пауза 20 с, щоб сервер "видихнув"...
timeout /t 20 /nobreak >nul
exit /b

rem ---- %1=назва  %2=threads  %3=ramp-up  %4=duration(сек) ----
:run2
echo.
echo ===== %1 : threads=%2 ramp=%3 duration=%4s =====
if exist "reports\%1" rmdir /s /q "reports\%1"
if exist "results\%1.jtl" del /q "results\%1.jtl"
call %JMETER% -n -t plan_part2.jmx -Jthreads=%2 -Jramp=%3 -Jduration=%4 -JmaxDuration=%MAXDUR% -l "results\%1.jtl" -e -o "reports\%1"
echo Пауза 20 с, щоб сервер "видихнув"...
timeout /t 20 /nobreak >nul
exit /b
