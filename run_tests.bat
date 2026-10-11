@echo off
setlocal
rem ===== Settings =====
set JMETER=C:\apache-jmeter-5.5\bin\jmeter.bat
set CONTAINER=stoic_elgamal
set HEAP=-Xms1g -Xmx4g
set MAXDUR=1000
cd /d "%~dp0"
if not exist results mkdir results
if not exist reports mkdir reports

echo Check that http://localhost:3001/characters responds. Close other programs.
pause

rem profile: name threads ramp duration think(ms)
call :run baseline 10 5 60 500
call :run load 100 20 120 200
call :run stress 1000 60 180 100
echo DONE. Reports: reports\baseline, reports\load, reports\stress
pause
exit /b

:run
echo.
echo ===== %1 : threads=%2 ramp=%3 duration=%4s think=%5ms =====
rem Restart container: reset data so GET /characters does not grow between runs
docker restart %CONTAINER% >nul
timeout /t 8 /nobreak >nul
if exist "reports\%1" rmdir /s /q "reports\%1"
if exist "results\%1.jtl" del /q "results\%1.jtl"
if exist "results\%1_resources.csv" del /q "results\%1_resources.csv"
if exist "results\%1_docker.csv" del /q "results\%1_docker.csv"
rem Background monitoring: host CPU/RAM (typeperf) and container (docker stats)
start "monitor" /b typeperf "\Processor(_Total)\%% Processor Time" "\Memory\%% Committed Bytes In Use" -si 1 -sc %4 -f CSV -o "results\%1_resources.csv" -y >nul
start "dstats" /b cmd /c docker_monitor.bat %CONTAINER% %4 results\%1_docker.csv
set JVM_ARGS=%HEAP%
call "%JMETER%" -n -t test-plan\qa-pro-rest.jmx -Jthreads=%2 -Jramp=%3 -Jduration=%4 -Jthink=%5 -JmaxDuration=%MAXDUR% -l "results\%1.jtl" -e -o "reports\%1"
timeout /t 20 /nobreak >nul
exit /b
