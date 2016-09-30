@echo off
if /i "%1" =="v" (git-it verify %2) else (if /i "%1" == "r" (git-it run %2) else (git-it %1))
