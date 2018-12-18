@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe" --inspect-brk "%~dp0\node_modules\grunt-cli\bin\grunt" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  --inspect-brk "%~dp0\node_modules\grunt-cli\bin\grunt" %*
)
