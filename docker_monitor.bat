@echo off
rem usage: docker_monitor.bat <container> <seconds> <output.csv>
echo time,cpu,mem> %3
for /l %%i in (1,1,%2) do (
  for /f "delims=" %%s in ('docker stats %1 --no-stream --format "{{.CPUPerc}},{{.MemUsage}}"') do echo %time%,%%s>> %3
  timeout /t 1 /nobreak >nul
)
