@echo off
if /i "%1" =="v" (javascripting verify %2) else (if /i "%1" == "r" (javascripting run %2) else (javascripting %1))
